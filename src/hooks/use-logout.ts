import nookies from "nookies";

export function useLogout() {
  const logout = async () => {
    nookies.destroy(null, "user");
  }

  return { logout };
}
