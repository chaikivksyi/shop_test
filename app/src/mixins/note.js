import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
const note = (text, type = 'success') => {
    createToast(text, {
        timeout: 2000,
        type: type,
        showCloseButton: false,
        swipeClose: false,
        hideProgressBar: true
    })
}

export default note;