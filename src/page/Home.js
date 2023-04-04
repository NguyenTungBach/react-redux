import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import '../App.css';
import {useEffect, useState} from "react"; // tránh render lại
import { useDispatch, useSelector } from "react-redux"; // trái gửi dữ liệu, phải lấy giá trị api
import {deleteUserAction, getUsers} from "../redux/action"; // Gọi hàm api

function Home() {
    const [state,setState] = useState(3);// Hook trái là biến, phải là set giá trị
    const [checkTest,setCheckTest] = useState(false);// Hook trái là biến, phải là set giá trị
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Nếu không dùng thì nó sẽ tự đông kết nối đến api liên tục
    let listUsers = useSelector((state) => state.data.users);

    const HandleTest = () => {
        console.log("Before: ",state);
        // alert("Test OK");

        setState(4);
        console.log("After: ",state);

        setCheckTest(!checkTest);
    }

    const HandleDelete = (id) => {
        dispatch(deleteUserAction(id));
    }

    return (
        <div>
            <h1>Home</h1>
            <Link to={"/AddUser"}>
                <div>AddUser</div>
            </Link>

            <Button onClick={HandleTest}>Test</Button>

            <div id="testCall" style={checkTest? {color:"blue"} : {color:"red"}}>Test Call</div>

            <table id="customers">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                {
                    listUsers && listUsers.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <Button>
                                        <Link to={`/EditUser/${item.id}`}>
                                            <div>EditUser</div>
                                        </Link>
                                    </Button>
                                    <Button onClick={() => HandleDelete(item.id)}>
                                        DeleteUser
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <div><Link to={"/EditUser"}>
                <Button>
                    <div>EditUser</div>
                </Button>
            </Link></div>
        </div>
    )
}
export default Home