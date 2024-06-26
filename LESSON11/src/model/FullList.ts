import ListItem from "./ListItem";

interface List{
    list: ListItem[],
    load(): void,
    save(): void,
    addItem(itemObj: ListItem): void
    removeItem(id: string): void
    clearList(): void
}


export default class FullList implements List {

    static instance: FullList = new FullList()
   
    private constructor(private _list: ListItem[]= []){}

    get list(){
        return this._list
    }

    load(){
        // Get data from the local storage

        const storedList: string | null = localStorage.getItem('myList')
        if (typeof storedList !== 'string') return // This means nothing is stored
        
        const parsedList: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList)

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
        })

    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }

    save(): void{
       localStorage.setItem('myList', JSON.stringify(this._list))
    }

    clearList(){
        this._list = []
        this.save()
    }
}