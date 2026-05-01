export default function RentCar() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl text-gray-800 leading-relaxed">
      {/* Tiêu đề chính */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-800 mb-6 text-center uppercase">
        Thuê Xe Tập Lái Tại TPHCM
      </h1>

      {/* Phần Giới thiệu */}
      <section className="space-y-4 mb-10 text-justify">
        <p>
          Thuê xe tập lái không chỉ giúp cho các bạn mới nhận bằng tự tin hơn
          khi điều khiển xe lưu thông trên đường mà còn giúp cho các bạn chưa có
          bằng lái ôn luyện trước kỳ thi sát hạch.
        </p>
        <p>
          Dịch vụ cho thuê xe tập lái chia làm 2 nhóm đối tượng chính: Người
          chưa có bằng lái và người đã có bằng lái xe ô tô. Mỗi nhóm đối tượng
          sẽ có các hướng dẫn bổ túc khác nhau.
        </p>
      </section>

      {/* Đối tượng 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-red-700 mb-4 border-b pb-2">
          Thuê xe tập lái cho người chưa có bằng lái
        </h2>
        <p className="mb-3">
          Với những bạn chưa có bằng lái xe cũng sẽ chia làm 2 đối tượng thuê
          xe:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Người thuê xe để thi bằng lái xe:</strong> Trường sẽ tập
            trung vào bổ túc đường trường và sa hình giúp cho học viên vừa có kỹ
            năng lái tốt đường trường nhưng cũng đảm bảo vượt qua kỳ thi sát
            hạch một cách dễ dàng.
          </li>
          <li>
            <strong>Người thuê xe để biết lái đi nước ngoài:</strong> Trường sẽ
            tập trung hướng dẫn kỹ năng lái xe đường trường, kỹ năng quan sát và
            phán đoán tình huống nhiều hơn.
          </li>
        </ul>
        <p className="mt-3 italic text-gray-600">
          * Vì thế khi đăng ký dịch vụ thuê xe tập lái tại TPHCM bạn nên cung
          cấp cho chúng tôi những thông tin chi tiết nhất để có thể hướng dẫn
          được hiệu quả hơn.
        </p>
      </section>

      {/* Đối tượng 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-red-700 mb-4 border-b pb-2">
          Thuê xe tập lái cho người đã có bằng lái xe
        </h2>
        <p className="mb-3">
          Những người đã có bằng lái xe cũng được Lái xe thực chiến Mr Năm
          chia ra làm 2 đối tượng:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Người mới lấy bằng:</strong> Cảm giác lái vẫn còn vì vừa thi
            xong, nên việc bổ túc đường trường thuận lợi hơn. Bạn sẽ được học từ
            dễ đến khó: đường lớn, đường nhỏ, nội thành giờ cao điểm, cao tốc
            hoặc liên tỉnh để nâng cao kỹ năng xử lý tình huống.
          </li>
          <li>
            <strong>Người đã có bằng nhưng lâu chưa lái:</strong> Gần như mất
            cảm giác xe, thông thường sẽ được bổ túc trong đường vắng, ít xe qua
            lại để lấy cảm giác lái trước khi đi ra đường lớn, đường bé nhiều xe
            qua lại.
          </li>
        </ul>
      </section>

      {/* Bảng giá */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-red-700 mb-4 border-b pb-2">
          Bảng giá thuê xe tập lái tại TPHCM
        </h2>
        <p className="mb-6">
          Hiện tại, trường chỉ bổ túc cho học viên khu vực thành phố Hồ Chí
          Minh. Những bạn ở tỉnh lân cận muốn bổ túc phải di chuyển lên thành
          phố.
        </p>

        {/* 1. Bảng giá đường trường */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 uppercase text-gray-700">
            1. Giá thuê xe tập lái đường trường
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
                    260.000đ/giờ
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">
                    290.000đ/giờ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic mt-2">
            * Lưu ý: Học viên đăng ký tối thiểu mỗi buổi học là 2 tiếng. Chi phí
            trên đã bao gồm xăng xe và giáo viên. Không phát sinh thêm chi phí.
          </p>
        </div>

        {/* 2. Bảng giá liên tỉnh */}
        <div>
          <h3 className="text-lg font-bold mb-3 uppercase text-gray-700">
            2. Thuê xe tập lái liên tỉnh (Tính theo tuyến)
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
            * Lưu ý: Giá tính trên 1 chiếc xe, nếu đi ghép có thể chia ra. Bổ
            túc Đà Lạt ở lại qua đêm chi phí giáo viên tự túc. Trọn gói xăng xe
            & giáo viên. Không bao gồm phí cầu đường (học viên tự trả).
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
              <strong>Thời gian:</strong> Thứ 2 - Chủ Nhật (Trừ ngày Lễ).
              <br />
              Sáng: 8h-12h | Chiều: 13h-17h | Tối: 17h-21h
            </li>
            <li>
              <strong>Đăng ký:</strong> Gọi Hotline/Zalo
              <span className="text-red-600 font-bold text-lg ml-1">
                091 22 666 11
              </span>
              <br />
              (Nên đặt trước 1/2 ngày, liên tỉnh đặt trước 2 ngày).
            </li>
            <li>
              <strong>Thanh toán:</strong> Có thể thanh toán trước hoặc học buổi
              nào gửi tiền trực tiếp cho giáo viên buổi đó.
            </li>
            <li className="text-gray-500 italic">
              *Lưu ý: Để tránh bị trôi lịch khi đặt qua giáo viên, Anh/Chị nên
              gọi trực tiếp qua Hotline.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-4">
            Địa Điểm Đón Học Viên
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Gò Vấp:</strong> Siêu thị E-mart, Lotte Nguyễn Văn Lượng,
              Vincom, Ngã 5 chuồng chó
            </li>
            <li>
              <strong>Bình Thạnh:</strong> Chợ Bà Chiểu, một số điểm đón tại nhà
              ở Bình Thạnh
            </li>
            <li>
              <strong>Thủ Đức & Quận 2:</strong> Giga Mall, Metro An Phú, Big C
              Thảo Điền
            </li>
            <li>
              <strong>Quận 1:</strong> Công viên Lê Văn Tám
            </li>
            <li>
              <strong>Tân Bình:</strong> Công viên Gia Định, Công viên Hoàng Văn
              Thụ, Lotte Cộng Hòa, Big C Trường Chinh, 71 Chế Lan Viên
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
