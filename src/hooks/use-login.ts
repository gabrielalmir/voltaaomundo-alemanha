import nookies from "nookies";

export function useLogin() {
  const login = async (email: string, password: string) => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const { id, error } = await response.json();

    if (error) {
      return { error };
    }

    nookies.set(null, "user", id, { path: "/" });

    return { id, email };
  }

  return { login };
}
