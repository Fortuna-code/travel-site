import '../styles/styles.css'
import MobilMenu from './modules/MobilMenu'

let mobilMenu = new MobilMenu();

if(module.hot) {
	module.hot.accept()
}
