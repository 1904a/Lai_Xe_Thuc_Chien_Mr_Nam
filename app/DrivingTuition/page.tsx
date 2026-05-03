export default function DrivingTuition() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl text-gray-800 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold text-red-800 mb-6 text-center uppercase">
        Bổ Túc Tay Lái Tại TPHCM
      </h1>

      <section className="space-y-4 mb-10 text-justify">
        <p>
          Bổ túc tay lái không chỉ giúp cho các bạn mới nhận bằng tự tin hơn khi
          điều khiển xe lưu thông trên đường mà còn giúp cho các bạn chưa có
          bằng lái ôn luyện trước kỳ thi sát hạch.
        </p>
        <p>
          Bổ túc tay lái chia làm 2 nhóm đối tượng chính: Người chưa có bằng lái
          và người đã có bằng lái xe ô tô. Mỗi nhóm đối tượng sẽ có các hướng
          dẫn bổ túc khác nhau.
        </p>
      </section>
      <div className="w-full h-[400px] bg-gray-200 mb-10">
  <img
    src="/images/BoTucTayLai.jpg"
    alt="Bổ túc tay lái tại TPHCM"
    className="w-full h-full object-cover rounded-lg border border-gray-300"
  />
</div>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-red-700 mb-4 border-b pb-2">
          Bổ túc tay lái cho người chưa có bằng lái
        </h2>
        <p className="mb-3">
          Với những bạn chưa có bằng lái xe cũng sẽ chia làm 2 đối tượng bổ túc:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Người bổ túc để thi bằng lái xe:</strong> Trường sẽ tập
            trung vào bổ túc đường trường và sa hình giúp cho học viên vừa có kỹ
            năng lái tốt đường trường nhưng cũng đảm bảo vượt qua kỳ thi sát
            hạch một cách dễ dàng.
          </li>
          <li>
            <strong>Người bổ túc để đi nước ngoài:</strong> Trường sẽ tập trung
            hướng dẫn kỹ năng lái xe đường trường, kỹ năng quan sát và phán đoán
            tình huống nhiều hơn.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-red-700 mb-4 border-b pb-2">
          Bổ túc tay lái cho người đã có bằng lái xe
        </h2>
        <p className="mb-3">
          Những người đã có bằng lái xe cũng được Đào tạo lái xe khôi việt - Thầy Năm 
          chia ra làm 2 đối tượng:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Người mới lấy bằng:</strong> Cảm giác lái vẫn còn vì vừa thi
            xong, việc bổ túc đường trường thuận lợi hơn. Bạn sẽ được học từ dễ
            đến khó: đường lớn, đường nhỏ, nội thành giờ cao điểm, cao tốc hoặc
            liên tỉnh để nâng cao kỹ năng xử lý tình huống.
          </li>
          <li>
            <strong>Người đã có bằng nhưng lâu chưa lái:</strong> Gần như mất
            cảm giác xe. Thông thường sẽ được bổ túc trong đường vắng, ít xe qua
            lại để lấy cảm giác lái trước khi đi ra đường lớn.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-red-700 mb-4 border-b pb-2">
          Bảng giá bổ túc tay lái tại TPHCM
        </h2>
        <p className="mb-6">
          Hiện tại, trường chỉ bổ túc cho học viên khu vực thành phố Hồ Chí
          Minh. Chi phí được chia làm 3 nhóm chính:
        </p>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 uppercase text-gray-700">
            1. Giá bổ túc tay lái đường trường
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-center">
              <thead className="bg-blue-50 text-blue-900">
                <tr>
                  <th className="border border-gray-300 px-4 py-3">
                    Loại Xe
                    </th>
                  <th className="border border-gray-300 px-4 py-3">
                    Xe số sàn
                  </th>
                  <th className="border border-gray-300 px-4 py-3">
                    Xe tự động
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">
                    4 Chỗ
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">
                    260.000đ/giờ
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">
                    350.000đ/giờ
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">
                    7 Chỗ
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">
                    300.000đ/giờ
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">
                    350.000đ/giờ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic mt-2">
            * Lưu ý: Đăng ký tối thiểu mỗi buổi học 2 tiếng. Chi phí đã bao gồm
            xăng xe và giáo viên. Không phát sinh.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 uppercase text-gray-700">
            2. Giá bổ túc tay lái sa hình
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-center">
              <thead className="bg-blue-50 text-blue-900">
                <tr>
                  <th className="border border-gray-300 px-4 py-3">Loại Xe</th>
                  <th className="border border-gray-300 px-4 py-3">
                    Xe số sàn
                  </th>
                  <th className="border border-gray-300 px-4 py-3">
                    Xe tự động
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">
                    4 Chỗ
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">
                    360.000đ/giờ
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">
                    390.000đ/giờ
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">
                    7 Chỗ
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">
                    400.000đ/giờ
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">
                    450.000đ/giờ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic mt-2">
            * Lưu ý: Đăng ký tối thiểu mỗi buổi học 3 tiếng. Trọn gói xăng xe,
            giáo viên và sân tập sa hình (xe thường không gắn chip).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 uppercase text-gray-700">
            3. Bổ túc tay lái liên tỉnh (Tính theo tuyến)
          </h3>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
            <div className="flex flex-col md:flex-row justify-between border-b pb-2">
              <span className="font-semibold">
                TPHCM – Vũng Tàu / Phan Thiết
              </span>
              <span>
                Số sàn 4 chỗ: <strong>2.000.000đ</strong> | Tự động 4 chỗ:{" "}
                <strong>2.200.000đ</strong>
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between border-b pb-2">
              <span className="font-semibold">TPHCM – Bảo Lộc</span>
              <span>
                Số sàn 4 chỗ: <strong>2.400.000đ</strong> | Tự động 4 chỗ:{" "}
                <strong>2.600.000đ</strong>
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <span className="font-semibold">TPHCM – Đà Lạt (Qua đêm)</span>
              <span>
                Số sàn 4 chỗ: <strong>4.400.000đ</strong> | Tự động 4 chỗ:{" "}
                <strong>4.600.000đ</strong>
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-500 italic mt-3">
            * Lưu ý: Giá tính trên 1 xe, có thể đi ghép để chia tiền. Bao gồm
            xăng xe, giáo viên. Chưa bao gồm phí cầu đường, học viên tự trả khi
            qua trạm.
          </p>
        </div>
      </section>

      {/* Thông tin đăng ký và điểm đón */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-4">
            Đăng Ký & Thanh Toán
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <strong>Thời gian:</strong> Thứ 2 - Chủ Nhật (Trừ Lễ).
              <br />
              Sáng: 8h-12h | Chiều: 13h-17h | Tối: 17h-21h
            </li>
            <li>
              <strong>Đăng ký:</strong> Gọi Hotline/Zalo
              <span className="text-red-600 font-bold text-lg ml-1">
                0917 329 245
              </span>
              <br />
              (Nên đặt trước 1/2 ngày, liên tỉnh đặt trước 2 ngày).
            </li>
            <li>
              <strong>Thanh toán:</strong> Thanh toán trước hoặc học xong gửi
              tiền trực tiếp cho giáo viên mỗi buổi.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-4">
            Địa Điểm Đón Học Viên
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Gò Vấp:</strong> Emart, Lotte Nguyễn Văn Lượng, Vincom,
              Ngã 5 chuồng chó
            </li>
            <li>
              <strong>Bình Thạnh:</strong> Chợ Bà Chiểu, hỗ trợ đón tại nhà (một
              số điểm)
            </li>
            <li>
              <strong>Thủ Đức & Q2:</strong> Giga Mall, Metro An Phú, Big C Thảo
              Điền
            </li>
            <li>
              <strong>Quận 1:</strong> Công viên Lê Văn Tám
            </li>
            <li>
              <strong>Tân Bình:</strong> CV Gia Định, CV Hoàng Văn Thụ, Lotte
              Cộng Hòa, Big C Trường Chinh, 71 Chế Lan Viên
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
