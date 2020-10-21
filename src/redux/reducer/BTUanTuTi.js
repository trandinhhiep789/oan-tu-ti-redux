//state BT Game oẳn tù tì
const stateDefault = {
    banChon: 1,
    soBanThang: 0,
    soBanChoi: 0,
    mangHinhAnh:
        [{ ten: 0, hinhAnh: "./img/bao.png" },
        { ten: 1, hinhAnh: "./img/bua.png" },
        { ten: 2, hinhAnh: "./img/keo.png" }],
    mangChayXong: [],
    ketQua: 3,
}

const BTGameUanTuTi = (state = stateDefault, action) => {
    switch (action.type) {
        case 'BAN_CHON': {
            state.banChon = action.banChon
            return { ...state }
        }
        case 'RANDOM': {
            const soNgauNhien = Math.floor(Math.random() * 3)
            console.log(soNgauNhien)
            state.mangChayXong = [...state.mangHinhAnh]
            state.ketQua = soNgauNhien
            state.soBanChoi += 1
            return { ...state }
        }
        case 'SO_BAN_THANG': {
            if (state.banChon === 0 && state.ketQua === 1) {
                state.soBanThang += 1
            }
            if (state.banChon === 1 && state.ketQua === 2) {
                state.soBanThang += 1
            }
            if (state.banChon === 2 && state.ketQua === 0) {
                state.soBanThang += 1
            }
            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default BTGameUanTuTi

