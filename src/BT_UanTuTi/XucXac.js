import React, { Component } from 'react'
import style from './buble.module.css'
import { connect } from 'react-redux'


class XucXac extends Component {


    renderKeoBuaBao = () => {
        return this.props.mangHinhAnh.map((ha, i) => {
            return <button className="mx-1"
                onClick={() => {
                    this.props.nhanChon(ha.ten)
                }}><img key={i} src={ha.hinhAnh} style={{ width: 50 }} /></button>
        })
    }

    renderCaiDaChon = () => {
        console.log(this.props.banChon)
        return <div className="bg-white mx-5 py-5" style={{ border: "7px solid green" }}>
            <img className="bg-white py-1" src={this.props.mangHinhAnh[this.props.banChon].hinhAnh} style={{ width: 50 }} />
        </div>
    }

    renderKetQua = () => {
        return this.props.ketQua !== 3 ?
            <div className="bg-white mx-5 py-5" style={{ border: "7px solid green" }}>
                <img className="bg-white py-1" src={this.props.mangChayXong[this.props.ketQua].hinhAnh} style={{ width: 50 }} />
            </div> : ''
    }

    render() {
        return (
            <div className={`${style.fontGameXucXac}`}
                style={{
                    background: 'url(./img/bgGame.png)', width: "100%", height: "100%", position: 'fixed', top: 0, left: 0, backgroundSize: "cover"
                }}>
                <div className="row">
                    <div className="col-3">
                        <div>
                            {this.renderCaiDaChon()}
                        </div>
                        <img className="mb-3" src="./img/player.png"
                            width="80%" />
                        {this.renderKeoBuaBao()}
                    </div>
                    <div className="col-6 text-white">
                        <div className="text-warning my-3">
                            <h1>i'm iron man</h1>
                            <h1>love you 3000</h1>
                        </div>
                        <div className="text-success my-3">
                            <h1>Số Bàn Thắng: {this.props.soBanThang}</h1>
                            <h1>Số Bàn Chơi: {this.props.soBanChoi}</h1>
                        </div>
                        <button className="btn btn-success px-4"
                            onClick={() => {
                                this.props.randomKetQua()
                            }}>Play Game</button>
                    </div>
                    <div className="col-3">
                        {this.renderKetQua()}
                        <img src="./img/playerComputer.png"
                            width="80%" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        banChon: state.stateBTUanTuTi.banChon,
        mangHinhAnh: state.stateBTUanTuTi.mangHinhAnh,
        soBanThang: state.stateBTUanTuTi.soBanThang,
        soBanChoi: state.stateBTUanTuTi.soBanChoi,
        mangChayXong: state.stateBTUanTuTi.mangChayXong,
        ketQua: state.stateBTUanTuTi.ketQua
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nhanChon: (banChon) => {
            const action = {
                type: 'BAN_CHON',
                banChon
            }
            dispatch(action)
        },
        randomKetQua: () => {
            const action = {
                type: 'RANDOM'
            }
            dispatch(action)

            const action2 = {
                type: 'SO_BAN_THANG'
            }
            dispatch(action2)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(XucXac)
