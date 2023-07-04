import { useState } from 'react'
import { formatCpf, formatCpfSync, formatCpfChange, clearFormatCpf, clearFormatCpfSync, isValidCpf, isValidCpfSync } from 'mok-ecosystem';
import './App.css'

function App() {

  const [cpfFormatCpf, setCpfFormatCpf] = useState('');
  const [isValidCpfLocal, setIsValidCpfLocal] = useState(false);

  const handleCpfFormatCpf = (e) => {
    setCpfFormatCpf(e.target.value);
  }

  const handleClearFormaCpf = async (cpfFormatCpf) => {
    let resp = await clearFormatCpf(cpfFormatCpf);
    console.log(resp);
    setCpfFormatCpf(resp);
  }

  const handleIsValidCpf = async (cpfFormatCpf) => {
    let resp = await isValidCpf(cpfFormatCpf);
    console.log(resp);
    setIsValidCpfLocal(resp);
  }

  const handleFormatCpf = async (cpf) => {
    let resp = await formatCpf(cpf);
    setCpfFormatCpf(resp);
  }

  return (
    <>
      <hr />
      <h3 className='mb-4'>Metodos para el CPF:</h3>
      <div className='row mb-4'>
        <div className="col-12 col-md-4">
          <div>
            <p className='mb-0'>Formateo de CPF</p>
            <input className='form-control' type="text" value={cpfFormatCpf} onChange={(e) => formatCpfChange(e, handleCpfFormatCpf)} />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div>
            <p className='mb-0'>Formateo de CPF Sync</p>
            <button className='btn btn-primary' onClick={() => formatCpfSync(cpfFormatCpf, setCpfFormatCpf)}>formatCpfSync</button>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div>
            <p className='mb-0'>Formateo de CPF Promise</p>
            <button className='btn btn-primary' onClick={() => handleFormatCpf(cpfFormatCpf)}>formatCpf</button>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12 col-md-4">
          <div>
            <p className='mb-0'>Borrar formato de CPF</p>
            <button className='btn btn-primary' onClick={() => clearFormatCpfSync(cpfFormatCpf, setCpfFormatCpf)}>clearFormatCpfSync</button>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div>
            <p className='mb-0'>Borrar formato de CPF Promise</p>
            <button className='btn btn-primary' onClick={() => handleClearFormaCpf(cpfFormatCpf)}>clearFormatCpf</button>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div>
            <p className='mb-0'>Verificar si CPF es Promise</p>
            <div>Valido: {isValidCpfLocal ? 'Valido' : 'No valido'}</div>
            <button className='btn btn-primary' onClick={() => handleIsValidCpf(cpfFormatCpf)}>isValidCpf</button>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <div>
            <p className='mb-0'>Verificar si CPF es valido</p>
            <div>Valido: {isValidCpfLocal ? 'Valido' : 'No valido'}</div>
            <button className='btn btn-primary' onClick={() => setIsValidCpfLocal(isValidCpfSync(cpfFormatCpf))}>isValidCpfSync</button>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default App
