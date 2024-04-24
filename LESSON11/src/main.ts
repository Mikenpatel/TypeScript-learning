import './css/style.css'
import FullList  from './model/FullList'
import ListItem from '../src/model/ListItem'
import ListTemplate from './templates/ListTemplates'




const initApp = (): void => {

    //  Get the referece of object 
    const fullList = FullList.instance
    const template = ListTemplate.instance
    // Main logic comes here
      
    //  Get the form element and and do action on submit event

    const formElement = document.querySelector('#itemEntryForm') as HTMLFormElement

    formElement.addEventListener('submit', (e: SubmitEvent): void => {
        e.preventDefault()

        //  Get the value of input field
        const inputElement = document.querySelector('#newItem') as HTMLInputElement
        const inputText: string = inputElement.value.trim()
        
        // If there is not value
        if(!inputText.length) return

        //  Calculate the id 

        const itemId: number = fullList.list.length ? (fullList.list.length + 1) : 1
         
        // Create a object to list item

        const itemObj = new ListItem(itemId.toString(), inputText)

        // Add that object to the list

        fullList.addItem(itemObj)

    //     Checking the list values
        console.log(fullList.list);

        // Print that value under the list 
         template.render(fullList)
        
    })


    // Add event listener to clear button
    const clearItems = document.querySelector('#clearItemsButton') as HTMLButtonElement

    clearItems.addEventListener('click', (): void => {
        fullList.clearList()
        template.clear()
    })

    // Load initial Data

    fullList.load()

    // Initial render 
    template.render(fullList)


}










document.addEventListener('DOMContentLoaded',initApp)