import { useState } from "react";
import avatar from "./assets/tien.JPG";
import logo from "./assets/logo.png";
export default function GreenwichPortalClone() {
  const students = {
    GBS248347: {
      name: "Tô Thủy Tiên",
      roll: "GBS248347",
      balance: "0 VND",
      major: "Data Engineering",
      email: "tienttgbs248347@fpt.edu.vn",
      phone: "0904947505",
      birthdate: "22/01/2006",
      gender: "Female",
      address: "9 đường 30, phường Hiệp Bình, Thành phố Hồ Chí Minh",
      avatar: avatar,
    },
    GBS230349: {
      name: "Trần Hoàng Phúc Doanh",
      roll: "GBS230349",
      balance: "0 VND",
      major: "Data Engineering",
      email: "doanhthpgbs230349@fpt.edu.vn",
      phone: "0974035641",
      birthdate: "23/06/2005",
      gender: "Male",
      address:
        "557B An Dương Vương ấp Bình Lợi, xã Bình Thành, huyện Lấp Vò, tỉnh Đồng Tháp",
      avatar:
        "https://i.imgur.com/JqYeZpZ.png",
    },

    GBS230001: {
      name: "Nguyễn Văn A",
      roll: "GBS230001",
      balance: "500000 VND",
      major: "Business",
      email: "vana@fpt.edu.vn",
      phone: "0900000001",
      birthdate: "01/01/2004",
      gender: "Male",
      address: "TP.HCM",
      avatar:
        "https://i.imgur.com/JqYeZpZ.png",
    },
  };

  const [studentId, setStudentId] = useState("");
  const [loggedInStudent, setLoggedInStudent] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = () => {
    const student = students[studentId.toUpperCase()];

    if (student) {
      setLoggedInStudent(student);
      setError("");
    } else {
      setError("Student ID not found!");
    }
  };

  const logout = () => {
    setLoggedInStudent(null);
    setStudentId("");
  };

  if (!loggedInStudent) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="flex flex-col items-center pt-10 px-8">
           <img
              src={logo}
              alt="logo"
              className="w-40"
/>

            <h1 className="text-5xl text-gray-600 font-light mb-8 text-center">
              Academic Portal
            </h1>

            <div className="w-full">
              <label className="block text-gray-700 text-lg font-semibold mb-2">
                Student ID
              </label>

              <input
                type="text"
                placeholder="Enter student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full border-2 border-blue-200 rounded-xl px-4 py-4 text-lg outline-none focus:border-blue-500 transition"
              />

              <select className="w-full mt-5 border rounded-xl px-4 py-4 text-lg text-gray-600 bg-white">
                <option>--Choose campus--</option>
                <option>Hồ Chí Minh</option>
                <option>Hà Nội</option>
                <option>Đà Nẵng</option>
                <option>Cần Thơ</option>
              </select>

              {error && (
                <p className="text-red-500 mt-4 text-center font-medium">
                  {error}
                </p>
              )}

              <button
                onClick={handleLogin}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 text-xl font-medium mt-6 transition"
              >
                Sign in for Student
              </button>

              <div className="mt-8 border-t pt-6 text-center text-gray-500 text-lg">
                Sign in for Staff & Student
              </div>

              <button className="w-full bg-blue-600 text-white rounded-xl py-4 text-lg mt-6 hover:bg-blue-700 transition">
                Sign in with Google
              </button>

              <button className="w-full bg-blue-600 text-white rounded-xl py-4 text-lg mt-4 hover:bg-blue-700 transition">
                Sign in with Office365
              </button>

              <button className="w-full bg-blue-600 text-white rounded-xl py-4 text-lg mt-4 mb-10 hover:bg-blue-700 transition">
                Sign in with FeID FPT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md px-6 py-4 flex items-center relative sticky top-0 z-10">

  {/* Menu bên trái */}
  <div className="absolute left-6 text-3xl cursor-pointer">
    ☰
  </div>

  {/* Logo giữa */}
  <div className="mx-auto">
    <img
      src={logo}
      alt="logo"
      className="w-40"
    />
  </div>

  {/* Logout bên phải */}
  <button
    onClick={logout}
    aria-label="Logout"
    className="absolute right-6 w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center text-4xl leading-none"
  >
    ⋮
  </button>

</div>

      <div className="max-w-2xl mx-auto p-5">
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-6">
          <div className="flex flex-col items-center">
            <img
              src={loggedInStudent.avatar}
              alt="avatar"
              className="w-52 h-64 object-cover rounded-full border-4 border-blue-200 shadow-lg"
            />

            <h2 className="text-5xl font-light text-gray-700 mt-8 text-center">
              {loggedInStudent.name}
            </h2>
          </div>

          <div className="mt-10 space-y-5 text-2xl text-gray-700 leading-relaxed">
            <p>
              <span className="font-semibold">Account balance:</span>{" "}
              {loggedInStudent.balance}
            </p>

            <p>
              <span className="font-semibold">RollNumber:</span>{" "}
              {loggedInStudent.roll}
            </p>

            <p>
              <span className="font-semibold">Major:</span>{" "}
              {loggedInStudent.major}
            </p>

            <p>
              <span className="font-semibold">Email:</span>{" "}
              {loggedInStudent.email}
            </p>

            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {loggedInStudent.phone}
            </p>

            <p>
              <span className="font-semibold">Birthdate:</span>{" "}
              {loggedInStudent.birthdate}
            </p>

            <p>
              <span className="font-semibold">Gender:</span>{" "}
              {loggedInStudent.gender}
            </p>

            <p>
              <span className="font-semibold">Address:</span>{" "}
              {loggedInStudent.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
