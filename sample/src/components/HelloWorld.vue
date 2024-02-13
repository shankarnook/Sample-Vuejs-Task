<template>
  <div class="hello">
    <div class='container'>
      <div class='row'>
        <div class="col-4">
        </div>
        <div class="col-4">
          <label>Name <b class='text-danger'>*</b></label>
          <div>
            <input v-model='EmpName' type="text" class="form-control" placeholder="Enter Name" required>
          </div>
          <div>
            <label>Employee Id <b class='text-danger'>*</b></label>
            <input v-model='empId' type="text" class="form-control"  placeholder="Employee Id" required >
          </div>
          <div class="">
            <label>Countrys <b class='text-danger'>*</b></label>
            <select v-model='empCountry' class='form-control' required>
              <option>Select Country</option>
              <option v-for='item in countryData' :key='item.id'>{{item.name}}</option>
            </select>
          </div>
          <div>
            <label>Gender <b class='text-danger'>*</b></label>
            <div>
              <label><input type="checkbox" value="" v-model="selectedMale"> Male</label>
              <label><input type="checkbox" v-model="selectedFemale"> Female</label>
            </div>
          </div>
          <button @click='SubmitData' type="submit" class="btn btn-primary w-25 p-1 mt-2">Submit</button>
        </div>
        <div class="col-4">
        </div>
      </div>
    </div>
  </div>

  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">EMP ID</th>
          <th scope="col">COUNTRY</th>
          <th scope="col">GENDER</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(item,index) in this.UserData' :key='item.id'>
          <th >{{index+1}}</th>
          <td>{{item.name}}</td>
          <td>{{item.empid}}</td>
          <td>{{item.empCountry}}</td>
          <td>{{item.gender}}</td>
          <td @click='editRecord(item,index)'>Edit</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <div class="modal" id='openModel' tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button @click='closeModel'  type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
           <div class="col-12">
          <label>Name <b class='text-danger'>*</b></label>
          <div>
            <input v-model='EditEmpName' type="text" class="form-control" placeholder="Enter Name" required>
          </div>
          <div>
            <label>Emplotee Id <b class='text-danger'>*</b></label>
            <input v-model='EditempId' type="text" class="form-control"  placeholder="Employee Id" required >
          </div>
          <div class="">
            <label>Countrys <b class='text-danger'>*</b></label>
            <select v-model='EditempCountry' class='form-control' required>
              <option>Select Country</option>
              <option v-for='item in countryData' :key='item.id'>{{item.name}}</option>
            </select>
          </div>
          <div>
            <label>Gender <b class='text-danger'>*</b></label>
            <div>
              <label><input type="checkbox" value="" v-model="EditselectedMale"> Male</label>
              <label><input type="checkbox" v-model="EditselectedFemale"> Female</label>
            </div>
          </div>
        </div>
          </div>
          <div class="modal-footer">
            <button @click='updateData' type="button" class="btn btn-primary">Update Changes</button>
            <button @click='closeModel' type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  data(){
    return{
        EmpName:'',
        empMail:'',
        empId:'',
        empGender:'',
        selectedMale:'false',
        selectedfemale:'false',
        empCountry:'',
        EditEmpName:'',
        EditempMail:'',
        EditempId:'',
        EditselectedMale:'false',
        Editselectedfemale:'false',
        editIndex:'',
        EditempCountry:'',
        countrysList:[{id:1,name:'New York'},{id:2,name:'London'},{id:3,name:'Tokyo'}],
        UserData:[{id:1,name:'Test',empid:'EMP123',empCountry:'New Yark',gender:'male'}],
    }
  },
  methods: {
    SubmitData(){
      if(this.EmpName && this.empCountry && this.empId ){
        if(this.selectedMale == true){
          this.UserData.push({name:this.EmpName,empid:this.empId,empCountry:this.empCountry,gender:'male'})
          
        }else{
          this.UserData.push({name:this.EmpName,empid:this.empId,empCountry:this.empCountry,gender:'female'})
        }
        alert('Successfully Created')
        

      }else{
        alert('please fill all mandatary feailds')
      }
    },
    editRecord(data,index){
      document.getElementById('openModel').style.display='block';
      this.EditEmpName = data.name;
      this.EditempId = data.empid;
      this.EditempCountry = data.empCountry;
      this.editIndex = index
      if(data.gender == 'male'){
        this.EditselectedMale = true;
      }else{
        this.EditselectedFemale = true;
      }
    },
    updateData(){
        if(this.EditEmpName && this.EditempCountry && this.EditempId ){
          if(this.EditselectedMale == true){
             this.UserData[this.editIndex]['name'] = this.EditEmpName;
            this.UserData[this.editIndex]['empid'] = this.EditempId;
            this.UserData[this.editIndex]['empCountry'] = this.EditempCountry;
            this.UserData[this.editIndex]['gender'] = 'male';
            console.log(this.UserData[this.editIndex][2])


            //this.UserData.push({name:,empid:this.EditempId,empCountry:this.EditempCountry,gender:'male'})
          }else{
            this.UserData[this.editIndex]['name'] = this.EditEmpName;
            this.UserData[this.editIndex]['empid'] = this.EditempId;
            this.UserData[this.editIndex]['empCountry'] = this.EditempCountry;
            this.UserData[this.editIndex]['gender'] = 'female';
            //this.UserData.push({name:this.EditEmpName,empid:this.EditempId,empCountry:this.EditempCountry,gender:'female'})
          }
          alert('Successfully Created')
        }else{
          alert('please fill all mandatary feailds')
        }
        document.getElementById('openModel').style.display='none';

    },
    closeModel(){
      document.getElementById('openModel').style.display='none';
    },
  },
  computed:{
    countryData(){
      return this.countrysList;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
