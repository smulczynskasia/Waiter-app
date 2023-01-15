import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import{ ListGroup, Spinner } from 'react-bootstrap';


const AllTables = () => {
  const tables = useSelector(state => getAllTables(state));
  if (tables.length === 0) return (
    <div className="d-flex align-items-center">
      <Spinner  animation="border" variant="primary" />
      <p className="text-primary m-2 fw-bold" style={{fontSize:"24px"}}>Loading</p>
    </div>
  )
  return (
    <div>
      <h1>All Tables</h1>
      <ListGroup variant="flush">
        {tables.map((table) => <ListGroup.Item className="d-flex justify-content-between align-items-start mt-3 ps-0 pe-0" key={table.id} status={table.status} id={table.id} to={'/table/' + table.id}>
        <div className="d-flex justify-content-between">
          <h3 className="pe-4">Table {table.id}</h3>
          <h6 className="d-flex align-items-center">Status:
            <span className="fw-normal  ps-1"> {table.status}</span>
          </h6>
        </div>
          <Link to={{ pathname: `/table/${table.id}`}} className="btn btn-primary mb-2">Show more</Link>
          </ListGroup.Item>)}
      </ListGroup>
    </div>
  );
};

export default AllTables;