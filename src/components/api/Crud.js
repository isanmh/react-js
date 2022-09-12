import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "../../utils/Api";
import ListItem from "./ListItem";
import TableData from "./TableData";

const Crud = () => {
  // constructor
  const [member, setMember] = useState([]);
  // variable untuk menampung nilai inputan
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  // varible tampung untuk edit {}
  const [selectMember, setSelectMember] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

  // dimount / didupdate ketika pertama kali component diakses
  useEffect(() => {
    getData();
  }, []);

  // get data api member
  const getData = () => {
    axios.get(api).then((res) => {
      // console.log(res.data);
      setMember(res.data);
    });
  };

  // post data api member ke server
  const postData = () => {
    // replace state awal dgn data form
    const data = {
      // nama: nama,
      nama,
      email,
      alamat,
    };
    // console.log(data);
    // logika jika tombol update di klik atau post
    if (isUpdate) {
      // axios put data
      axios.put(`${api}/${selectMember.id}`, data).then((res) => {
        console.log(res);
        getData();
        setNama("");
        setEmail("");
        setAlamat("");
        setIsUpdate(false);
      });
    } else {
      axios.post(api, data).then((res) => {
        // console.log(res);
        getData();
        setNama("");
        setEmail("");
        setAlamat("");
      });
    }
  };

  // pilih satu data yg diupdate
  const selectItem = (item) => {
    console.log(item);
    setNama(item.nama);
    setEmail(item.email);
    setAlamat(item.alamat);
    // replace selectMember dgn item yg dipilih
    setSelectMember(item);
    setIsUpdate(true);
  };

  // delete data api member
  const deleteData = (id) => {
    axios.delete(`${api}/${id}`).then((res) => {
      console.log(res);
      getData();
    });
  };

  return (
    <Container>
      <Row>
        <Col className="mt-4 mb-4 col-md-4">
          <h5>Form Data Member</h5>
          <hr />
          <div className="form-group">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              className="form-control"
              name="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="alama">Alamat</label>
            <input
              type="text"
              className="form-control"
              name="alamat"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
          <button
            className="btn btn-outline-primary mt-4 mb-5"
            onClick={postData}
          >
            {isUpdate ? "Update" : "Simpan"}
          </button>
        </Col>
        <Col className="mt-4 mb-4 col-md-8">
          <TableData>
            {member.map((member) => {
              return (
                <ListItem
                  data={member}
                  key={member.id}
                  onUpdate={selectItem}
                  onDelete={deleteData}
                />
              );
            })}
          </TableData>
        </Col>
      </Row>
    </Container>
  );
};

export default Crud;
