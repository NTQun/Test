import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
const Main = () => {
  const [address, setAddress] = useState("");
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
      <div>
        <form action="" className="needs-validation">
          <div className=" d-flex align-items-center justify-content-center">
            <h1>THÔNG TIN CÁ NHÂN</h1>
          </div>
          <div className="input-name py-5 p-3 was-validated">
            <div className="row">
              <h3>Nhập họ và tên</h3>
              <div className="input-name  py-2 ">
                <input
                  required
                  type="text"
                  className="mx-2"
                  placeholder="Nhập họ và tên lót"
                />
                <div className="valid-feedback">Nhập xong</div>
              </div>{" "}
              <div>
                <input
                  required
                  type="text"
                  className="px-2"
                  placeholder="Nhập tên"
                  id="ten"
                />
                <div className="valid-feedback">Nhập xong</div>
              </div>
            </div>
          </div>
          <div className="input-address py-2 p-3">
            <div className="form-group row">
              <label htmlFor="" className="col-sm-2 form-control-label">
                Nơi ở hiện tại
              </label>
              <div className="col-sm-5">
                <input
                  required
                  type="text"
                  list="tp"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="valid-feedback">Nhập xong</div>

                <datalist id="tp">
                  <option value="TP HCM">TP HCM</option>
                  <option value="TP Đồng Nai">TP Đồng Nai</option>
                </datalist>
                {address === "TP HCM" && (
                  <>
                    <input
                      required
                      className="mx-2"
                      type="text"
                      placeholder="Quận/Huyện"
                      list="quan/huyen"
                    />
                    <div className="valid-feedback">Nhập xong</div>
                    <div className="invalid-feedback">
                      Vui lòng Nhập Quận/ Huyện
                    </div>
                    <datalist id="quan/huyen">
                      <option value="Q. Tân Phú">Q. Tân Phú</option>
                      <option value="Q. Tân Bình">Q. Tân Bình</option>
                      <option value="Q. Bình Tân">Q. Bình Tân</option>
                    </datalist>
                  </>
                )}
                <div className="valid-feedback">Nhập xong</div>
                {address == "TP Đồng Nai" && (
                  <>
                    <input
                      required
                      className="mx-2"
                      type="text"
                      placeholder="Quận/Huyện"
                      list="quan/huyen"
                    />
                    <div className="valid-feedback">Nhập xong</div>

                    <datalist id="quan/huyen">
                      <option value="Q. Tân Phú">Tp Biên Hòa</option>
                      <option value="Q. Tân Phú">H. Long Thành</option>
                      <option value="Q. Bình Tân">H Xuân Lộc</option>
                    </datalist>
                  </>
                )}
                <div className="valid-feedback">Nhập xong</div>
              </div>
              <div className="mt-2">
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
                      <div className="valid-feedback">Nhập xong</div>

                      <option value="DEFAULT" disabled>
                        Tỉnh
                      </option>
                      <option value="1">TP HCM</option>
                      <option value="2">TP Đồng Nai</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="input-birth row py-2 p-3">
            <div className="input  py-2  p-3">
              <label htmlFor="" className="col-sm-2 form-control-label">
                Năm Sinh
              </label>
              <input
                required
                type="number"
                min={1900}
                max={yearNow}
                className="mx-2 col-sm-5"
                placeholder="Nhập năm sinh"
              />

              <div className="valid-feedback">Nhập xong</div>
            </div>
          </div>
          <div className=" py-2 p-3">
            <h3> Trình độ học vấn</h3>

            <div className="form-group row">
              <label htmlFor="" className="col-sm-2 form-control-label">
                Trình độ học vấn
              </label>
              <div className="col-sm-5">
                <input
                  required
                  className="mx-2"
                  type="text"
                  placeholder="Trình độ học vấn"
                  list="hoc-van"
                />{" "}
                <div className="valid-feedback">Nhập xong</div>{" "}
                <datalist id="hoc-van">
                  <option value="Trung Cấp">Trung Cấp</option>
                  <option value="Cao Đẳng">Cao Đẳng</option>
                  <option value="Đại Học">Đại Học</option>
                </datalist>
              </div>
            </div>

            <div className="form-group row py-2">
              <label htmlFor="" className="col-sm-2 form-control-label">
                Chuyên Ngành
              </label>
              <div className="col-sm-5">
                <input
                  required
                  className="mx-2"
                  type="text"
                  placeholder="Chuyên Ngành"
                  list="chuyen-nganh"
                  onChange={(e) => setMajor(e.target.value)}
                />
                <div className="valid-feedback">Nhập xong</div>{" "}
                <datalist id="chuyen-nganh">
                  <option value="CNTT">CNTT</option>
                  <option value="QTKD">QTKD</option>
                </datalist>
                <div className="invalid-feedback">
                  Vui lòng chọn chuyên ngành
                </div>
                {major == "QTKD" && (
                  <>
                    <input
                      required
                      className="mx-2"
                      type="text"
                      placeholder="Chức danh"
                      list="chuc-danh"
                    />
                    <div className="valid-feedback">Nhập xong</div>{" "}
                    <datalist id="chuc-danh">
                      <option value="Giám đốc kinh doanh">
                        Giám đốc kinh doanh
                      </option>
                      <option value=" nhân viên kinh doanh">
                        nhân viên kinh doanh
                      </option>
                    </datalist>
                  </>
                )}
                {major == "CNTT" && (
                  <>
                    <input
                      required
                      className="mx-2"
                      type="text"
                      placeholder="Chức danh"
                      list="chuc-danh"
                    />
                    <div className="valid-feedback">Nhập xong</div>{" "}
                    <datalist id="chuc-danh">
                      <option value="Frontend Developer">
                        Frontend Developer
                      </option>
                      <option value="Backend Developer">
                        Backend Developer
                      </option>
                    </datalist>
                  </>
                )}
              </div>
              <div className="invalid-feedback">Nhập xong</div>
            </div>

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
                  required
                />
              </div>
              <div className="valid-feedback">Nhập xong</div>
            </div>
          </div>
          <button
            className="p-3 py-3 mt-3 btn btn-primary "
            type="submit"
            onClick={() => alert("Nhập Xong Form")}
          >
            Lưu
          </button>
        </form>
      </div>
    </>
  );
};

export default Main;
