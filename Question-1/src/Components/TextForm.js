import React, {useState} from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState("Enter the text");
  return (
    <div>
    <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label"><h3>{props.title}</h3></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" value={Text} rows="3"></textarea>
    </div>
    <button class="btn btn-primary">Convert To UpperCase</button>
        </div>
  )
}
