import { Link } from "react-router-dom";
import Form from "../components/Form";

import { Button, TextField } from "@mui/material";

export default function RegisterPage() {
  return (
    <section>
      <Form
        className="max-w-md mx-auto container rounded-md gradient-border"
        headingText="Create New Account"
      >
        <div className="grid gap-4">
          <TextField
            id="outlined-basic"
            label="* Full Name"
            variant="outlined"
          />

          <TextField id="outlined-basic" label="* Email" variant="outlined" />

          <TextField
            id="outlined-basic"
            label="* Password"
            type="password"
            variant="outlined"
          />

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
              Sign up
            </Button>
            <Link className="text-center group" to="/login">
              Already have an account?{" "}
              <span className="text-[#00BCD4] text-sm underline underline-offset-2 group-hover:text-red-500">
                Log in
              </span>
            </Link>
          </div>
        </div>
      </Form>
    </section>
  );
}
