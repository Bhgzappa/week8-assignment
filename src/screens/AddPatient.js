import { Form, Container, Button } from "react-bootstrap";

const AddPatient = () => {
  return (
    <Container
      style={{
        height: "70vh",
        width: "70%",
        display: "grid",
        gridTemplateColumns: "40%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "1fr",
          gridGap: 15,
          padding: "20px",
          border: "1px solid white",
        }}
      >
        <h3 className="text-center">Patient Details Form</h3>
        <Form.Control placeholder="Enter Name"></Form.Control>
        <Form.Control placeholder="Enter Age"></Form.Control>
        <Form.Control placeholder="Enter Address "></Form.Control>
        <Form.Control placeholder="Enter Diagnosis "></Form.Control>
        <Form.Control placeholder="Enter date of admission "></Form.Control>
        <Form.Control placeholder="Enter date of discharge "></Form.Control>
        <Button>SAVE</Button>
      </Form>
    </Container>
  );
};

export default AddPatient;
