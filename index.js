const canvas = {
    self:document.createElement("canvas"),
    width:400,
    height:400,
    ctx:null,
    commands:[],
    do(that){
        this.commands.push(that);
    },
    set_dim(width,height){
        if(width)this.width = width;
        if(height)this.height = height;
    },
    append(){
        this.self.width = this.width;
        this.self.height = this.height;
        this.ctx = this.self.getContext("2d");
        for(let command of this.commands){
            command(this.ctx);
        }
        addEventListener("load",e=>{
            document.body.appendChild(this.self);
        })
    }
}
