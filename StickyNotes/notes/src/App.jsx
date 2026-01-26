import React, { useEffect, useState } from 'react'
import 'animate.css';
import './App.css'
import { Plus } from 'lucide-react';
import { Modal, Button, Input, Form } from 'antd';
import { useNotes } from './zustand/userNotes';
import { v4 as uuidv4 } from 'uuid';
const colors = [
  "#fec971",
  "#fe9b71",
  "#b592fd",
  "#00d4fe",
  "#abc1fe"

]
function App() {

  const [selectColor, setSelectColor] = useState("#fe9b71");
  const [open, setOpen] = useState();
  const [form] = Form.useForm();
  const { notes, setNotes } = useNotes();
  //const [filtered, setFiltered] = useState(notes);
  const [activeFilter, setActiveFilter] = useState("all");

  const createNote = (values) => {
    values.color = selectColor;
    values.date = new Date().toDateString();
    values.id = uuidv4();
    setNotes(values);
    setActiveFilter("all");
    //setFiltered(notes);
    handleModalClose();
    console.log(values);
    console.log(notes);
  }


  /*useEffect(() => {
    //setFiltered(notes);
    console.log(notes)
  }, [displayedNotes, notes]);*/


  const handleModalClose = () => {
    setOpen(false)
    setSelectColor("#fe9b71")
    form.resetFields();
  }

  /* const filterNotes = (color) => {
       const data = (color==="all") ? notes : notes.filter(item=>item.color===color)
       setFiltered(data);
   }*/

  const displayedNotes = activeFilter === "all" ? notes : notes.filter(item => item.color === activeFilter);

  const filterNotes = (color) => {
    setActiveFilter(color); // Just update the filter string
  };
  return (
    <>
      <div className='flex items-center justify-center h-screen overflow-hidden p-6 bg-gray-600'>
        <div className='animate__animated animate__fadeIn bg-gray-400 shadow-2xl border border-black-200 w-full h-full rounded-4xl flex p-8 gap-6 overflow-auto'>
          <div className='flex flex-col items-center gap-8'>

            <button onClick={() => setOpen(true)} className='bg-slate-900 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-slate-950 active:scale-80 transition duration-300'>
              <Plus />
            </button>


            <div className='flex flex-col gap-4'>
              <button
                onClick={() => filterNotes("all")}
                className='text-sm border-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-950 hover:text-amber-100 active:scale-80 transition duration-300'>
                All
              </button>
              {
                colors.map((color, index) => (
                  <button
                    onClick={() => filterNotes(color)}
                    style={{ background: color }}
                    key={index}
                    className='bg-slate-600 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-950 active:scale-80 transition duration-300' />
                ))
              }

            </div>

          </div>
          <div className='border-r border-r-gray-200'></div>
          <div className='flex-1'>
            <h1 className='text-2xl font-medium text-slate-900'>Notes</h1>
            <div className='mt-4 grid grid-cols-4 gap-6'>
              {
                //filtered---robo
                displayedNotes.map((item, index) => (
                  <div
                    key={index}
                    className='p-4 rounded-xl h-32 overflow-auto border-2 border-slate-950 animate__animated animate__pulse'
                    style={{ background: item.color }}
                  >
                    <p className='text-sm font-medium text-slate-800'>{item.content}</p>
                    <label className='text-xs text-white flex  mt-1'>{item.date}</label>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <Modal open={open} footer={null} title="Create Your Note" onCancel={handleModalClose}>
          <Form onFinish={createNote} form={form}>
            <Form.Item
              name="content"
              rules={[{ required: true }]}
            >
              <Input.TextArea
                placeholder='Your content goes here....'
                rows={4}
              />
            </Form.Item>
            <div className='flex gap-3 mb-6'>
              {
                colors.map((color, index) => (
                  <button
                    onClick={() => setSelectColor(color)}
                    type='button'
                    style={{ background: color }}
                    key={index}
                    className={`${selectColor === color ? "scale-140 border-2 shadow" : " "} bg-slate-600 hover:scale-120 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-950 active:scale-80 transition duration-300`} />
                ))
              }
            </div>
            <Form.Item>
              <Button htmlType='submit' type='primary' danger>Save</Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  )
}

export default App
