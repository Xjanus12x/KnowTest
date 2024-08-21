import { Link } from "react-router-dom";
import Form from "../components/Form";

import { Button, TextField } from "@mui/material";

export default function LoginPage() {
  return (
    <section>
      <Form
        className="max-w-md mx-auto container rounded-md gradient-border"
        headingText="Welcome Back"
      >
        <div className="grid gap-4">
          <TextField
            id="outlined-basic"
            label="* Full Name"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="* Email" variant="outlined" />
          <div className="grid gap-1">
            <TextField
              id="outlined-basic"
              label="* Password"
              variant="outlined"
              type="password"
            />
            <Link
              className="text-cyan hover:text-red-500 hover:underline"
              to=""
            >
              Forgot password
            </Link>
          </div>
          <div className="grid gap-1">
            <Button
              sx={{
                backgroundColor: "#00BCD4",
                color: "white",
                "&:hover": {
                  backgroundColor: "#00BCD4",
                  color: "black",
                },
                padding: "8px 16px",
                borderRadius: "4px",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
            <Link className="text-center group" to="/register">
              Don't have an account?{" "}
              <span className="text-cyan text-sm underline underline-offset-2 group-hover:text-red-500">
                Sign up
              </span>
            </Link>
          </div>
        </div>
      </Form>
    </section>
  );
}
