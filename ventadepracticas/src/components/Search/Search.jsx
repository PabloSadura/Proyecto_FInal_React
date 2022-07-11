import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Search() {
  return (
    <>
      <InputGroup className=" me-3">
        <Form.Control
          placeholder="Ingrese su búsqueda"
          aria-label="Recipient's username"
          aria-describedby="btn-search"
        />
        <Button variant="outline-secondary" id="btn-search">
          Buscar
        </Button>
      </InputGroup>
    </>
  );
}

export default Search;
