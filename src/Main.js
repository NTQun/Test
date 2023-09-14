import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
const Main = () => {
  const [add, setAdd] = useState("");
  const [major, setMajor] = useState("");

  const d = new Date();
  let yearNow = d.getFullYear();
  const options = [
    { label: "Thương Mại", value: "Thương Mại" },
    { label: "Xản Xuất", value: "Xản Xuất" },
    { label: "Dịch vụ", value: "Dịch Vụ" },
  ];
  const [selected, setSelected] = useState([]);
  return (
    <>
      <div className="">
        <div className=" d-flex align-items-center justify-content-center">
          <h1>THÔNG TIN CÁ NHÂN</h1>
        </div>
        <div className="input-name py-5 p-3">
          <h3>Nhập họ và tên</h3>
          <div className="input-name  py-2 ">
            <input
              type="text"
              className="mx-2"
              placeholder="Nhập họ và tên lót"
              required
            />
            <input
              type="text"
              className="px-2"
              placeholder="Nhập tên"
              required
            />
          </div>
        </div>
        <div className="input-address py-2 p-3">
          <form>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-2 form-control-label">
                Nơi ở hiện tại
              </label>
              <div className="col-sm-5">
                <select
                  required
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setAdd(e.target.value)}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Tỉnh
                  </option>
                  <option value="1">TP HCM</option>
                  <option value="2">TP Đồng Nai</option>
                </select>
                {add == 1 && (
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Quận/Huyện</option>

                    <option value="1">Q.Tân Phú </option>
                    <option value="2">Q.Tân Bình</option>
                    <option value="2">Q.Bình Tân</option>
                  </select>
                )}
                {add == 2 && (
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Quận/Huyện</option>

                    <option value="1">Tp Biên Hòa </option>
                    <option value="2"> H.Lòng Thành</option>
                    <option value="2">H.Xuân Lộc</option>
                  </select>
                )}
              </div>
              <div className="mt-2">
                <form>
                  <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 form-control-label">
                      Quê Quán
                    </label>
                    <div className="col-sm-5">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue={"DEFAULT"}
                      >
                        <option value="DEFAULT" disabled>
                          Tỉnh
                        </option>
                        <option value="1">TP HCM</option>
                        <option value="2">TP Đồng Nai</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </form>
        </div>
        <div className="input-birth row py-2 p-3">
          <div className="input  py-2  p-3">
            <label htmlFor="" className="col-sm-2 form-control-label">
              Năm Sinh
            </label>
            <input
              type="number"
              min={1900}
              max={yearNow}
              className="mx-2 col-sm-5"
              placeholder="Nhập năm sinh"
            />
          </div>
        </div>
        <div className=" py-2 p-3">
          <h3> Trình độ học vấn</h3>
          <form>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-2 form-control-label">
                Trình độ học vấn
              </label>
              <div className="col-sm-5">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Trình độ
                  </option>
                  <option value="1">Trung Cấp</option>
                  <option value="2">Cao Đẳng</option>
                  <option value="2">Đại Học</option>
                </select>
              </div>
            </div>
          </form>
          <form>
            <div className="form-group row py-2">
              <label htmlFor="" className="col-sm-2 form-control-label">
                Chuyên Ngành
              </label>
              <div className="col-sm-5">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={"DEFAULT"}
                  onChange={(e) => setMajor(e.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Chuyên Ngành
                  </option>
                  <option value="1"> Kinh doanh dịch vụ</option>
                  <option value="2"> Công nghệ thông tin</option>
                </select>
                {major == 1 && (
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Chức danh</option>

                    <option value="1">Giám đốc kinh doanh</option>
                    <option value="2">Nhân viên kinh doanh</option>
                  </select>
                )}
                {major == 2 && (
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Chức danh</option>

                    <option value="1">Frontend Developer </option>
                    <option value="2"> Backend Developer</option>
                  </select>
                )}
              </div>
            </div>
          </form>
          <form>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-2 form-control-label">
                Lĩnh Vực Làm Việc
              </label>
              <div className="col-sm-5">
                <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                />
              </div>
            </div>
          </form>
          <button className="p-3 py-2 " type="submit">
            Lưu
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
