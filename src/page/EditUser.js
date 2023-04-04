import {Button, Form} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {createUserAction, findUserAction, updateUserAction} from "../redux/action";

function EditUser() {
    const [state,setState] = useState({
        name:"",
        email:"",
        phone:""
    });// Hook trái là biến, phải là set giá trị

    let dispatch = useDispatch();
    let navigate = useNavigate(); // Chuyển trang
    const params = useParams();
    console.log(params)
    useEffect(() => {
        dispatch(findUserAction(params.id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Nếu không dùng thì nó sẽ tự đông kết nối đến api liên tục
    let findUser = useSelector((state) => state.data.user);
    console.log(findUser)

    useEffect(() => {
        if (findUser){
            setState(findUser);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [findUser]); // Nếu không dùng thì nó sẽ tự đông kết nối đến api liên tục
    // deps nếu giá trị thay đổi sẽ render lại

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserAction(params.id,state));
        navigate("/");
    }

    const onChangeInput = (valueInput) => {
        // Cách 1: Lấy giá trị
        // let name = valueInput.target.name;
        // let value = valueInput.target.value;

        // Cách 2: Lấy giá trị
        let { name, value } = valueInput.target;
        setState({ ...state, [name]: value });
    }

    return (
        <div>
            <h1>Edit</h1>
            <div style={{ width: 300, margin: "0 auto" }}>
                <Form>
                    <Link to={"/"}>
                        <Button variant="secondary" type="submit" className="my-4">
                            Back
                        </Button>
                    </Link>
                    <br/>
                    <Form.Control
                        name="name"
                        value={state.name}
                        className="mb-4"
                        type="text"
                        placeholder="name"
                        onChange={onChangeInput}
                    />
                    <Form.Control
                        value={state.email}
                        name="email"
                        className="mb-4"
                        type="email"
                        placeholder="email"
                        onChange={onChangeInput}
                    />
                    <Form.Control
                        value={state.phone}
                        name="phone"
                        className="mb-4"
                        type="number"
                        placeholder="phone"
                        onChange={onChangeInput}
                    />
                    <br/>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Edit User
                    </Button>
                </Form>
            </div>
        </div>
    )
}
export default EditUser