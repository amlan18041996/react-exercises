const RegisterForm = () => {
    return (
        <Form action="post">
            <div className="">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-input" />
            </div>
            <div className="">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-input" />
            </div>
        </Form>
    );
}
 
export default RegisterForm;