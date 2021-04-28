import { useContext, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { PatientsContext } from "../contexts/PatientsContext";
import { FiEdit, FiDelete, FiEye } from "react-icons/fi";
const Patients = () => {
  const { loading, patients, getPatients } = useContext(PatientsContext);

  useEffect(() => {
    getPatients();
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      {loading && <Spinner animation="border" />}
      {patients.length > 0 ? (
        <Table striped hover>
          <thead>
            <tr>
              <th>NAME</th>
              <th>AGE</th>
              <th>ADDRESS</th>
              <th>DIAGNOSIS</th>
              <th>DOA</th>
              <th>DOD</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient._id}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.address}</td>
                <td>{patient.diagnosis}</td>
                <td>{patient.doa}</td>
                <td>{patient.dod}</td>
                <td>
                  <FiDelete /> <FiEdit /> <FiEye />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        !loading && <h1>NO RECORDS</h1>
      )}
    </section>
  );
};

export default Patients;