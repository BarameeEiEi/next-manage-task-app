import Image from "next/image";
import logoimg from "@/assets/task.png";
import Link from "next/link";
import FooterSAU from "@/components/FooterSAU"; 

export default function Page() {
    
  return (
    <>
      <div className="w-3/5 mt-10 p-10 shadow-xl mx-auto border border-gray-400 rounded-xl flex flex-col justify-center items-center">
        {/* แสดงรูปจาก internet */}
        <Image src={logoimg} alt="logo" width={100} height={100} />
        {/* แสดงชื่อแอป */}
        <h1 className="mt-5 text-2xl font-bold text-gray-700">
          Manage Task App
        </h1>
        <h1 className="mt-3 text-lg text-gray-700">แก้ไขงาน</h1>
        {/* ส่วนของการป้อนงาน แสดงรายละเอียดงาน */}
        <div className="w-full flex flex-col mt-5">
          <h1>ชื่องาน</h1>
          <input
            type="text"
            className="mt-1 p-2 border border-gray-400 rounded mb-2"
            placeholder="กรุณากรอกชื่องาน"
          />
          <h1>รายละเอียดงาน</h1>
          <textarea
            className="mt-1 p-2 border border-gray-400 rounded mb-2"
            placeholder="กรุณากรอกรายละเอียดงาน"
            rows={4}
          ></textarea>
        </div>
        {/* ส่วนเลือกรูป และแสดงรูป */}
        <div className="w-full mt-5 flex flex-col">
          <h1>อัพโหลดรูป</h1>
          <input
            id="selectImage"
            type="file"
            accept="image/*"
            className="hidden"
          />
          <label
            htmlFor="selectImage"
            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded mt-1 mb-2 w-30 text-center"
          >
            เลือกรูปภาพ
          </label>
          {/* แสดงรูปที่เลือกมา */}
        </div>
        {/* ส่วนเลือกสถานะงาน */}
        <div className="w-full mt-5 flex flex-col">
          <h1>สถานะงาน</h1>
          <select className="mt-1 p-2 border border-gray-400 rounded mb-2">
            <option value="0">ยังไม่เสร็จ</option>
            <option value="1">เสร็จแล้ว</option>
          </select>
        </div>
        {/* ปุ่มบันทึกงาน */}
          <button className="w-full bg-green-500 py-2 px-4 rounded text-white hover:bg-green-600 mt-3">
            บันทึกงานใหม่
          </button>
          {/* ปุ่มกลับไปหน้าข้อมูลทั้งหมด /showalltask */}
          <Link href="/showalltask" className="w-full bg-purple-500 py-2 px-4 rounded text-white hover:bg-purple-600 mt-3 text-center cursor-pointer">
            กลับไปหน้าข้อมูลทั้งหมด
          </Link>
      </div>
      {/* Footer */}
        <FooterSAU/>
    </>
  );
}
