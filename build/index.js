import React, { Component } from 'react';
import './List.css';

onInputChange = e =>{

console.log(e);
console.log(e.target.value);
}
const List = (props) => {
return (
<div class="flex">
<div class="flex-venbest">

<div class="flex-venbest__item "><div class="flex-venbest__item__heading">
<strong>Имя</strong>
</div>

{props.List.map(apidata => (
<div class="flex-venbest__item__content">
<p>{apidata.name}</p>
</div>
)
)}
</div>


<div class="flex-venbest__item "><div class="flex-venbest__item__heading">


<div class="flex-venbest__item "><div class="flex-venbest__item__heading">
<strong>Возраст</strong>
</div>

{props.List.map(apidata => (
<div class="flex-venbest__item__content">
<p>{apidata.age}</p>
</div>
)
)}
</div>

<div class="flex-venbest__item "><div class="flex-venbest__item__heading">
<strong>Пол</strong>
</div>

{props.List.map(apidata => (
<div class="flex-venbest__item__content">
<p>{apidata.sex}</p>
</div>
)
)}
</div>



</div>
</div>
)
}
export default List;
