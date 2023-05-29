import { useNavigate, useParams } from 'react-router-dom';
import './style.css';
import { useEffect, useState } from 'react';
import { getCategories } from '../../../api/getCategories';
import newAddCoin from '../../../api/newAddCoin';
import getCoinDetails from '../../../api/getCoinDetails';
import editCoin from '../../../api/editCoin';
import { Upload } from 'antd';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../firebase';

const CoinEditPage = () => {

    const coinTable = ['title', 'about', 'image', 'category_id']
    const descriptionTable = ['description']
    const navigate = useNavigate()
    const { id } = useParams()
    const [categories, setCategories] = useState([])
    const [firstData, setFirstData] = useState({
        title: '',
        denomination: '',
        year: null,
        price: null,
        currency_symbol: '',
        issuing_country: '',
        composition: '',
        about: '',
        description: '',
        quality: '',
        weight: null,
        weight_symbol: '',
        image: '',
        back_image: '',
        category_id: ''
    })
    const [coinData, setCoinData] = useState({
        title: '',
        denomination: '',
        year: null,
        price: null,
        currency_symbol: '',
        issuing_country: '',
        composition: '',
        about: '',
        description: '',
        quality: '',
        weight: null,
        weight_symbol: '',
        image: '',
        back_image: '',
        category_id: ''
    })

    useEffect(() => {
        if (id) {
            getCoinDetails(id).then(res => {
                const data = res[0]
                const data2 = res[1]

                setCoinData({
                    title: data?.title,
                    denomination: data?.denomination,
                    year: parseInt(data?.year),
                    price: parseInt(data?.price),
                    currency_symbol: data?.currency_symbol,
                    issuing_country: data?.issuing_country,
                    composition: data?.composition,
                    about: data?.about,
                    description: data2?.description,
                    quality: data?.quality,
                    weight: parseInt(data?.weight),
                    weight_symbol: data?.weight_symbol,
                    image: data?.image,
                    back_image: data?.back_image,
                    category_id: data?.category_id
                })
                setFirstData({
                    title: data?.title,
                    denomination: data?.denomination,
                    year: parseInt(data?.year),
                    price: parseInt(data?.price),
                    currency_symbol: data?.currency_symbol,
                    issuing_country: data?.issuing_country,
                    composition: data?.composition,
                    about: data?.about,
                    description: data2?.description,
                    quality: data?.quality,
                    weight: parseInt(data?.weight),
                    weight_symbol: data?.weight_symbol,
                    image: data?.image,
                    back_image: data?.back_image,
                    category_id: data?.category_id
                })
            })
        }

    }, [id])

    useEffect(() => {

        getCategories().then(data => {
            const categoriesArr = []
            data.forEach(item => {
                const { id, title } = item
                categoriesArr.push({
                    id,
                    title
                })
            });
            setCategories(categoriesArr)
        })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        const changedFields = Object.entries(coinData).filter(item => firstData[item[0]] !== item[1])

        const coinsTableData = changedFields.filter(item => coinTable.includes(item[0]));
        const coinDetailsTableData = changedFields.filter(item => (!coinTable.includes(item[0]) && !descriptionTable.includes(item[0])))
        const descriptonTableData = changedFields.filter(item => descriptionTable.includes(item[0]))


        if (id && (coinsTableData?.length || coinDetailsTableData?.length || descriptonTableData?.length)) {

            editCoin({
                id,
                coinsTableData: coinsTableData?.length ? Object.fromEntries(coinsTableData) : null,
                coinDetailsTableData: coinDetailsTableData?.length ? Object.fromEntries(coinDetailsTableData) : null,
                descriptonTableData: descriptonTableData?.length ? Object.fromEntries(descriptonTableData) : null,
            }).then(data => {
                if (data?.length) {
                    navigate(-1)
                }
            })
        }

        if (!id) {
            const formData = new FormData(e.target)
            const formArr = [...formData.entries()]
            const formDataObj = Object.fromEntries(formArr);
            console.log('formDataObj:',formDataObj)
            newAddCoin({
                ...formDataObj,
                image: coinData?.image,
                back_image: coinData?.back_image
            }).then(data => {
                if (data?.success) {
                    navigate(-1)
                }
            })
        }
    }

    const changeHandler = (e) => {
        const { name, value } = e.target
        setCoinData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleUploadImage = (e, imageType) => {
        const { originFileObj, uid } = e.file
        const nameArr = originFileObj.name.split('.')
        const newNameFile = nameArr[0] + uid + '.' + nameArr[1]
        const storageRef = ref(storage, newNameFile);
        console.log('e file status: ',e.file.status)

        uploadBytes(storageRef, originFileObj).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log('snapshot: ', snapshot)
                console.log('url: ', url)

                if (imageType === 'front') {
                    setCoinData(prev => ({
                        ...prev,
                        image: url
                    }))
                } else {
                    setCoinData(prev => ({
                        ...prev,
                        back_image: url
                    }))
                }
            })
        })

    }

    console.log('image: ',coinData.image)
    console.log('back_image: ',coinData.back_image)

    return (
        <div>
            <h1 className="homepage-title">Admin panel</h1>
            <form onChange={changeHandler} onSubmit={submitHandler} className="edit-page">
                <div className='first-col' >
                    <label>
                        <p>Coin name</p>
                        <input value={coinData.title} className='edit-input' name='title' />
                    </label>
                    <label>
                        <p>Face value</p>
                        <input value={coinData.denomination} className='edit-input' name='denomination' />
                    </label>
                    <label>
                        <p>Year of issue</p>
                        <input value={coinData.year} type="number" className='edit-input' name='year' />
                    </label>
                    <label>
                        <p>Price</p>
                        <input value={coinData.price} type="number" className='edit-input small-input' name='price' />
                        <select value={coinData.currency_symbol} className='edit-input small-select' name='currency_symbol'>
                            <option value="$">$</option>
                            <option value="€">€</option>
                            <option value="£">£</option>
                            <option value="₼">₼</option>
                            <option value="₣">₣</option>
                            <option value="₺">₺</option>
                        </select>
                    </label>
                    <label>
                        <p>Country</p>
                        <input value={coinData.issuing_country} className='edit-input' name='issuing_country' />
                    </label>
                    <label>
                        <p>Metal</p>
                        <input value={coinData.composition} className='edit-input' name='composition' />
                    </label>
                </div>
                <div className='second-col'>
                    <label>
                        <p>Short description</p>
                        <textarea value={coinData.about} className='edit-input edit-textarea' name='about' />
                    </label>
                    <label>
                        <p>Long description</p>
                        <textarea value={coinData.description} className='edit-input edit-textarea' name='description' />
                    </label>
                    <label>
                        <p>Quality of the coin</p>
                        <input value={coinData.quality} className='edit-input' name='quality' />
                    </label>
                    <label>
                        <p>Weight</p>
                        <input value={coinData.weight} className='edit-input small-input' name='weight' type='number' />
                        <select value={coinData.weight_symbol} className='edit-input small-select' name='weight_symbol'>
                            <option value='g'>g</option>
                            <option value='mg'>mg</option>
                        </select>
                    </label>
                </div>
                <div className='third-col'>
                    {
                        id ? (
                            <>
                                <label>
                                    <p>Link to obverse image</p>
                                    <input value={coinData.image} className='edit-input' name='image' />
                                </label>
                                <label>
                                    <p>Link to reverse image</p>
                                    <input value={coinData.back_image} className='edit-input' name='back_image' />
                                </label>
                            </>
                        ) : (
                            <>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '28px'
                                }}
                                    className='upload-div1'>
                                    <Upload
                                        name="avatar"
                                        listType="picture-circle"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action=""
                                        // beforeUpload={beforeUpload}
                                        onChange={(e) => handleUploadImage(e, 'front')}
                                    >
                                        {coinData?.image ? (
                                            <img
                                                src={coinData?.image}
                                                alt="avatar"
                                                style={{
                                                    width: '100%',
                                                }}
                                            />
                                        ) : (
                                            <div>+</div>
                                        )}
                                    </Upload>

                                    <span className='upload-btn-label'>Upload Front Image</span>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                                className='upload-div2'>    
                                    <Upload
                                        name="avatar"
                                        listType="picture-circle"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action=""
                                        // beforeUpload={beforeUpload}
                                        onChange={(e) => handleUploadImage(e, 'reverse')}
                                    >
                                        {coinData?.back_image ? (
                                            <img
                                                src={coinData?.back_image}
                                                alt="avatar"
                                                style={{
                                                    width: '100%',
                                                }}
                                                className='upload-image'
                                            />
                                        ) : (
                                            <div>+</div>
                                        )}
                                    </Upload>

                                    <span className='upload-btn-label'>Upload Reverse Image</span>
                                </div>
                            </>
                        )
                    }
                    <label>
                        <p>Category id</p>
                        <select value={coinData.category_id} className='edit-input edit-select' name='category_id'>
                            <option value=''>Select category</option>
                            {
                                categories?.map((categories) => (
                                    <option key={categories.id} value={categories.id}>{categories.title}</option>
                                ))
                            }
                        </select>
                    </label>
                    <div className='edit-actions'>
                        <button className='editBtn-save' type='submit'>Save</button>
                        <button onClick={() => navigate(-1)} type='button' className='editBtn-cancel'>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CoinEditPage;