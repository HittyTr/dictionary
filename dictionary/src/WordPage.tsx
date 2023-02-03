import React, { ChangeEvent, useState } from "react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextField from '@mui/material/TextField';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { IWord } from "./interfaces";
import { Meaning,Definition } from "./interfaces";

export default function WordPage(){
  const [word,setWord]=useState<string>("")
  const [search,setSearch]=useState<boolean>(false)
  const [info,setInfo]=useState<IWord>({
    word:"",
    phonetic:"",
    meanings:[]
  })
  const [mean,setMean]=useState<Meaning>({
    partOfSpeech:"",
    definitions:[]
})

  const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

  const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
    setWord(event.target.value)
  }

  const handleClick=async()=>{
    const response=await fetch(url)
    const data=await response.json()
    setInfo(data[0])
    setMean(data[0].meanings[0])
    setSearch(true)
  }
  console.log(info.meanings[0])
  return (
    <div className="container">
      <div className="input__area">
      <TextField className="input" id="standard-basic" label="Search a word" variant="standard" onChange={handleChange}/>
      <SearchOutlinedIcon onClick={handleClick}/>
      </div>
      <div className="word__play">
        <div className="word">
        <h1>{info.word}</h1>
        <p>{info.phonetic}</p>
        </div>
        {search && <PlayCircleOutlineOutlinedIcon/>}
      </div>
      {search && <div className="word__meaning">
        <h3 className="word__meaning__title">{mean.partOfSpeech}</h3>
        <hr></hr>
        <p className="word__meaning__mean">Meaning</p>
        <ul>
          {mean.definitions.map((item: Definition,key:number)=>{
          return <li>{item.definition}</li>
        })}</ul>
      </div>}
    </div>
  )
}