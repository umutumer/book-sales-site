import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateData } from '../Redux/slice';

const Update = () => {
    const { id } = useParams();
    const data = useSelector(state => state.data);
    const existingBook = data.find(book => book.id == id) || {};

    const { kitapAdi,kitapKategori,kitapYazari,sayfaSayisi,kitapResim,kitapAciklama} = existingBook;

    const [upKitapAdi, setUpKitapAdi] = useState(kitapAdi);
    const [upKitapKategori, setUpKitapKategori] = useState(kitapKategori);
    const [upKitapYazari, setUpKitapYazari] = useState(kitapYazari);
    const [upSayfaSayisi, setUpSayfaSayisi] = useState(sayfaSayisi);
    const [upKitapResim, setUpKitapResim] = useState(kitapResim);
    const [upkitapAciklama, setUpKkitapAciklama] = useState(kitapAciklama);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) =>{
        e.preventDefault();
        dispatch(updateData({
            id: id,
            kitapAdi: upKitapAdi,
            kitapKategori: upKitapKategori,
            kitapYazari: upKitapYazari,
            sayfaSayisi: upSayfaSayisi,
            kitapResim: upKitapResim
        }))
        navigate('/admin')
    }

    return (
        <div className='w-full flex flex-col items-center mt-24'>
            <form onSubmit={handleUpdate}>
            <Link className=" border-b-2 w-10 fixed top-25 left-2" to='/admin' >Back</Link>
                <h3 className='text-3xl text-blue-600 font-bold mb-5 mt-5'>Update Book Data</h3>
                <div>
                    <label className="text-xl font-medium mr-1" htmlFor="name">Kitap Adı:</label> <br />
                    <input className=" w-80 border-solid border p-1 rounded-md" type="text" placeholder={kitapAdi} value={kitapAdi} onChange={e=>setUpKitapAdi(e.target.value)} />
                </div>
                <br />
                <div>
                    <label className="text-xl font-medium mr-2" htmlFor="email">Kitap Kategori:</label> <br />
                    <input className=" w-80 border-solid border p-1 rounded-md" type="text"   value={kitapKategori} onChange={e => setUpKitapKategori(e.target.value)} />
                </div> <br />
                <div>
                    <label className="text-xl font-medium mr-2" htmlFor="email">Kitap Yazarı:</label> <br />
                    <input className=" w-80 border-solid border p-1 rounded-md" type="text"  value={kitapYazari} onChange={e => setUpKitapYazari(e.target.value)} />
                </div> <br />
                <div>
                    <label className="text-xl font-medium mr-2" htmlFor="email">Sayfa Sayısı:</label> <br />
                    <input className=" w-80 border-solid border p-1 rounded-md" type="text"   value={sayfaSayisi} onChange={e => setUpSayfaSayisi(e.target.value)} />
                </div> <br />
                <div>
                    <label className="text-xl font-medium mr-2" htmlFor="email">Kitap Resim Url:</label> <br />
                    <input className=" w-80 border-solid border p-1 rounded-md" type="text"   value={kitapResim} onChange={e => setUpKitapResim(e.target.value)} />
                </div> <br />
                <div>
                <label className="text-xl font-medium mr-2" htmlFor="email">Kitap Resim Url:</label> <br />
                <textarea className=" w-80 border-solid border p-1 rounded-md" value={kitapAciklama} name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button className=" w-32 p-1 mb-5 text-white rounded-xl bg-green-500 hover:shadow-green-400 hover:shadow-lg ease-in-out duration-300">Update</button>
            </form>
        </div>
    )
}

export default Update;