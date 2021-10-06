import { DaftarNilaiProvider } from "./daftarNilaiContext";
import DaftarNilaiForm from "./daftarNilaiForm";
import DaftarNilaiList from "./daftarNilaiList";

const DaftarNilai = () => {
    return(
        <DaftarNilaiProvider>
            <DaftarNilaiList/>
            <DaftarNilaiForm/>
        </DaftarNilaiProvider>  
    )
}

export default DaftarNilai