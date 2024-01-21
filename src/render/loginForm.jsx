import { Form } from "react-router-dom";

const LoginForm = () => {
    return (
        <Form action="post">
            <div className="">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-element" />
            </div>
            <div className="">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-element" />
            </div>
        </Form>
    );
}
 
export default LoginForm;