import React from "react";
import Swal from "sweetalert2";

const ListItem = ({ data, onUpdate, onDelete }) => {
  // fungsi Alert
  const deleteData = () => {
    Swal.fire({
      title: "Apakah Anda Yakin?",
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(data.id);
        Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
      }
    });
  };

  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.nama}</td>
      <td>{data.email}</td>
      <td>{data.alamat}</td>
      <td>
        <button className="btn btn-warning" onClick={() => onUpdate(data)}>
          Edit
        </button>{" "}
        <button className="btn btn-danger" onClick={deleteData}>
          Hapus
        </button>
      </td>
    </tr>
  );
};

export default ListItem;
