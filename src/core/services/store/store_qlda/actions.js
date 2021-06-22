import axiosInstance from '../../plugins/axios';
import { CONFIG_ACCESS_TOKEN } from '../../constants';
import { SET_AUTH } from '../store_metronic/auth.module';
import { SET_PERSONAL_INFO } from '../store_metronic/profile.module';

export default {

    
    async getAllListDataDm({ commit }) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        // var data = {
        //     'email': 'admin77777@gmail.com',
        //     'password':'12345678'
        // }

        try {

            var result = await axiosInstance.get('/getAllDataTableDm', config);
            commit('SET_LIST_DATADM', result.data.data)
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    async getListDataDmHasPaging(context,page) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        // var data = {
        //     'email': 'admin77777@gmail.com',
        //     'password':'12345678'
        // }

        try {

            var result = await axiosInstance.get('/getDataTableDm?page='+page, config);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    

    async getAllListDataBaoGia({ commit }) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        // var data = {
        //     'email': 'admin77777@gmail.com',
        //     'password':'12345678'
        // }

        try {

            var result = await axiosInstance.get('/getAllDataTableGiaVT', config);
            console.log('getAllListDataBaoGia',result);
            commit('SET_LIST_DATABGIA', result.data.data)
            return result

            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },


    async getListDataBaoGiaHasPaging( context ,page) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        // var data = {
        //     'email': 'admin77777@gmail.com',
        //     'password':'12345678'
        // }

        try {

            var result = await axiosInstance.get('/getDataTableBaoGia?page='+page, config);
            return result

            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    

    async getListDataRole({ commit }) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        // var data = {
        //     'email': 'admin77777@gmail.com',
        //     'password':'12345678'
        // }

        try {

            var result = await axiosInstance.get('/getDataTableRole', config);
            console.log("result", result);
            commit('SET_LIST_DATAUSER', result.data.user);
            commit('SET_LIST_DATAROLE', result.data.role);
            commit('SET_LIST_DATA_ROLE_OF_ALL_USER', result.data.role_of_all_user);
            
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    async getListDataUser({ commit }) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        // var data = {
        //     'email': 'admin77777@gmail.com',
        //     'password':'12345678'
        // }

        try {

            var result = await axiosInstance.get('/getDataTableUser', config);
            console.log("result", result);
            commit('SET_LIST_DATAUSER', result.data.user);
            commit('SET_LIST_DATAROLE', result.data.role);
            commit('SET_LIST_DATA_ROLE_OF_ALL_USER', result.data.role_of_all_user);
            
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    toggleForm({ commit }) {
        // console.log("Action toggleForm");
        commit('TOGGLE_FORM');
    },

    async handleAddNewUser(context, { name = '', email = '', password = '', role_id = null }) {

        let data = {
            name: name,
            email: email,
            password: password,
            role_id: role_id,
        }
        // var config = {
        //     headers:{
        //         'Accept': 'application/json',    
        //     }
        // }

        try {

            var result = await axiosInstance.post(`createUser`, data);
            console.log('result', result)
            if (result.status === 200) {
                if (result.data.success) {
                    //commit('SET_USER_INFO', result.data.user);
                    return {
                        ok: true,
                        data: result.data.user,
                        error: null
                    }
                }
                if (result.data.success === false) {
                    return {
                        ok: false,
                        error: result.data.message,
                    }
                }
            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
    },



    handleEdit({ commit }, userSelected) {
        commit('HANDLE_EDIT', userSelected);
    },
// call api cho update thong tin user
     async handleEditUserById({ commit }, { name = '', email = '', password = '', role_id = null, idUser = '' }) {
        let data = {
            name: name,
            email: email,
            password: password,
            role_id: role_id,
            idUser:idUser
        }

        try {

            var result = await axiosInstance.post(`updateUser/${data.idUser}`, data);
            console.log('handleEditUserById', result)
            if (result.status === 200) {
                if (result.data.success) {
                    //commit('SET_USER_INFO', result.data.user);
                    commit('TOGGLE_FORM');
                   // commit('CHANGE_TASKS', listTaskClone);
                    return {
                        ok: true,
                        data: result.data,
                        error: null
                    }
                }
            
            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
            // dispatch('toggleForm')
          
        
    },


    async handleDeleteUserById(context,  idUser ) {
        
    
        console.log('handleEditUserById', idUser)
        try {

            var result = await axiosInstance.post(`deleteUser/${idUser}`);
            console.log('handleEditUserById', result)
            if (result.status === 200) {
                if (result.data.success) {
                    //commit('SET_USER_INFO', result.data.user);
                  
                   // commit('CHANGE_TASKS', listTaskClone);
                    return {
                        ok: true,
                        data: result.data,
                        error: null
                    }
                }
            
            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
            // dispatch('toggleForm')
          
        
    },

// hàm api update dinhmuc
    async updateDataWithId(context, { maDinhMuc = '', tenMaDinhMuc = '', noteDinhMuc = '', idDinhMuc = '', idUser = ''  }) {

        let data = {
            maDinhMuc: maDinhMuc,
            tenMaDinhMuc: tenMaDinhMuc,
            ghiChuDinhMuc: noteDinhMuc,
            id: idDinhMuc,
            idUser:idUser
        }
        // var config = {
        //     headers:{
        //         'Accept': 'application/json',    
        //     }
        // }

        try {

            var result = await axiosInstance.post(`updateDataDm/${data.id}/${data.idUser}`, data);
  
            if (result.status === 200) {
                if (result.data.success) {
                    //commit('SET_USER_INFO', result.data.user);
                    return {
                        ok: true,
                        data: result.data.user,
                        error: null
                    }
                }
                if (result.data.success === false) {
                    return {
                        ok: false,
                        error: result.data.message,
                    }
                }
            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
    },


    async updateDataGiaVatTuWithId(context, { maVatTu = '', tenVatTu = '', donVi = '', 
    giaVatTu = '', nguon = '', ghiChu = '', tinh = '', tacGia = '', idVatTu =''}) {

        let data = {
            maVatTu: maVatTu,
            tenVatTu: tenVatTu,
            donVi: donVi,
            giaVatTu: giaVatTu,
            nguon: nguon,
            ghiChu: ghiChu,
            tinh: tinh,
            tacGia: tacGia,
            id: idVatTu,
            
        }
        // var config = {
        //     headers:{
        //         'Accept': 'application/json',    
        //     }
        // }

        try {

            var result = await axiosInstance.post(`updateDataGiaVatTu/${data.id}`, data);
       
            if (result.status === 200) {
                if (result.data.success) {
                    //commit('SET_USER_INFO', result.data.user);
                    return {
                        ok: true,
                        data: result.data.user,
                        error: null
                    }
                }
                if (result.data.success === false) {
                    return {
                        ok: false,
                        error: result.data.message,
                    }
                }
            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
    },


    handleSearch({ commit }, stringSearch) {
        commit('HANDLE_SEARCH', stringSearch)
    },

    handleBlurSearch({ commit }, stringSearch) {
        commit('HANDLE_BLUR_SEARCH', stringSearch)
    },

    

    //tao bang gia vat tu.bắt buộc phải có context hoặc commit,dispath ...
    async createBaoGia(context, {tempFinalRs = '',idUserImport = '',agreeOverride = 0}) {
        try {
            let data = {
                jsonData: tempFinalRs,
                idUserImport:idUserImport,
                agreeOverride:agreeOverride
            }
            var result = await axiosInstance.post(`/createGiaVT/${data.idUserImport}/${data.agreeOverride}`, data);
            console.log('result', result);

            // commit('SET_LOADING', false);
            if (result.status === 200) {


                return {
                    ok: true,
                    error: null,
                    data: result.data
                }

            } else {
                return {
                    ok: false,
                    error: result.data.error
                }
            }

        } catch (error) {
            console.log('error');

            // commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },



    async login({ commit, dispatch }, { email = '', password = '' }) {
        try {
            let data = {
                email: email,
                password: password
            }
            var result = await axiosInstance.post('/login', data);


            // commit('SET_LOADING', false);
            if (result.status === 200) {
                let resultUser = await dispatch('getUserWithId', result.data.token);
                commit('SET_USER_INFO', resultUser.data);
                commit('SET_LOGIN_INFO', { user: resultUser.data, token: result.data.token });
                let users = {
                    info: resultUser.data,
                    token: result.data.token
                }
                commit(SET_AUTH, users, { root: true });// dùng cú  pháp này để commit 1 mutation từ 1 module khác

                return {
                    ok: true,
                    error: null,
                    data: result.data
                }

            } else {
                return {
                    ok: false,
                    error: result.data.error
                }
            }

        } catch (error) {
            console.log('error');

            // commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },

    async register({ commit, dispatch }, data) {
        // commit('SET_LOADING', true);
        console.log("data = ", data);
        try {

            var result = await axiosInstance.post('/register', data);
            console.log('result.data.token', result)
            // commit('SET_LOADING', false);
            if (result.status === 200 && result.data.token) {
                let resultUser = await dispatch('getUserWithId', result.data.token);
                console.log('result.data.token', result.data.token)
                commit('SET_USER_INFO', resultUser.data);
                commit('SET_LOGIN_INFO', { user: resultUser.data, token: result.data.token });
                return {
                    ok: true,
                    error: null,
                    data: result.data
                }

            } else {
                return {
                    ok: false,
                    error: result.data.errors
                }
            }

        } catch (error) {
            console.log('error');

            // commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async logout({ commit }) {
        commit('SET_LOGOUT');
        return null
    },

    async getUserWithId(context, token = '') {
        var config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        }

        try {

            var result = await axiosInstance.get('/details', config);
            if (result.status === 200) {
                context.commit('SET_USER_INFO', result.data.user);
                context.commit(SET_AUTH, result.data);
                context.commit(SET_PERSONAL_INFO, result.data,{ root: true });
                return {
                    ok: true,
                    data: result.data.user,
                    error: null
                }
            }
            return {
                ok: false,
                error: result.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
    },


    async checkLogin({ commit, dispatch }) {
        try {
            let tokenLocal = localStorage.getItem(CONFIG_ACCESS_TOKEN);

            if (tokenLocal) {
                // let resultUser      = await dispatch('getUserById', userObj.id);
                // let resultPostUser  = await dispatch('getListPostsByUserId', userObj.id);
                let promiseUser = await dispatch('getUserWithId', tokenLocal);
                //let promisePostUser     = dispatch('getListPostsByUserId', userObj.id);

                //let [resultUser, resultPostUser] = await Promise.all([ promiseUser, promisePostUser ]);

                // Dòng 73 chạy 3s
                // Dòng 74 chạy 4s
                // Tổng lại chúng ta phải chờ 7s 
                // Hai API trên chạy riêng lẽ được hay không?

                // Nếu 2 API trên chạy đồng thời -> tổng thời gian chờ chỉ là 4s thôi
                if (promiseUser.ok) {
                    let data = {
                        user: promiseUser.data,
                        token: tokenLocal
                    }
                    commit('SET_LOGIN_INFO', data);
                    return {
                        ok: true,
                        error: null
                    }
                }
            }
            return {
                ok: false
            }

        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    },
}