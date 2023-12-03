import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavDashboard from "./NavDashboard";
import Sidebar from "./Sidebar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";

function ListMobil() {
  const { id } = useParams();
  const [mobil, setMobil] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/read/mobil/"+id)
      .then((res) => {
        console.log(res);
        setMobil(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <NavDashboard />
      <div className="w-full flex flex-row shadow-xl">
        <Sidebar />
        <div className="flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
          <div>
            <a className="">
              <Link to="/aset">
                <IoMdArrowRoundBack className="m-7 text-4xl " />
              </Link>
            </a>
          </div>

          <div className="overflow-y-auto h-96 flex flex-col items-center bg-white min-h-screen">
            <div className="flex flex-col items-center justify-center mt-9">
              <p className="font-bold mt-3 text-4xl text-primary">
                Informasi Mobil
              </p>
              <img
                src="/sportcar.svg"
                alt="Sport Car"
                width="150"
                className="mt-4"
              />
            </div>

            <div className="h-[15rem] flex flex-col items-center space-y-4 mt-9">
              <div className="bg-primary2 shadow-md rounded-lg w-96 p-6">
                {/* Tipe Mobil */}
                <div className="flex mb-4">
                  <p className="font-bold mr-2">Tipe Mobil :</p>
                  <p className="text-gray-800">{mobil.nama_kendaraan}</p>
                </div>
                {/* No Polisi */}
                <div className="flex mb-4">
                  <p className="font-bold mr-2">No Polisi :</p>
                  <p className="text-gray-800 font-md">{mobil.no_pol}</p>
                </div>
                {/* Bahan Bakar */}
                <div className="flex mb-4">
                  <p className="font-bold mr-2">Bahan Bakar :</p>
                  <p className="text-gray-800">{mobil.jenis}</p>
                </div>
                {/* Transmisi */}
                <div className="flex mb-4">
                  <p className="font-bold mr-2">Transmisi :</p>
                  <p className="text-gray-800 font-md">{mobil.transmisi}</p>
                </div>
                {/* Tahun */}
                <div className="flex mb-4">
                  <p className="font-bold mr-2">Tahun :</p>
                  <p className="text-gray-800 font-md">{mobil.tahun}</p>
                </div>
                {/* Warna */}
                <div className="flex mb-5">
                  <p className="font-bold mr-2">Warna :</p>
                  <p className="text-gray-800">{mobil.warna}</p>
                </div>
              </div>

              <div className="flex flex-col items-start space-y-4">
                <label htmlFor="" className="font-bold">
                  Pengingat
                </label>
                <div className="flex space-x-4 items-center">
                  <button className="btn btn-active">Aktif</button>
                  <button className="btn btn-active">Selesai</button>
                </div>

                <div className="bg-primary2 shadow-md rounded-lg w-96 h-96 p-6 flex items-center justify-center">
                  <p className="text-gray-500">Pengingat masih kosong</p>
                </div>

                <label htmlFor="" className="font-bold">
                  Riwayat Service
                </label>
                <div className="bg-primary2 shadow-md rounded-lg w-96 h-96 p-6 flex items-center justify-center">
                  <p className="text-gray-500">Riwayat Service masih kosong</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListMobil;
