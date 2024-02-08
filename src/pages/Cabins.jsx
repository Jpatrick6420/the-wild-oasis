// import { useEffect, useState } from "react";
// import { getCabins } from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable.jsx";
// import Button from "../ui/Button.jsx";
// import CreateCabinForm from "../features/cabins/CreateCabinForm.jsx";
import AddCabin from "../features/cabins/AddCabin.jsx";
import CabinTableOperations from "../features/cabins/CabinTableOperations.jsx";

function Cabins() {
  // const [showForm, setShowForm] = useState(false);

  //   useEffect(function () {
  //     getCabins().then((data) => console.log(data));
  //   }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
        <p>Filter/Sort</p>

        {/* <Button onClick={() => setShowForm((show) => !show)}>
          {showForm ? "Close Form" : "Add new Cabin"}
        </Button>
        {showForm && <CreateCabinForm />} */}
      </Row>
    </>
  );
}

export default Cabins;
