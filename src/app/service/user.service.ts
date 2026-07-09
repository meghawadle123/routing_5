import { Injectable } from '@angular/core';
import { IresUser, IUser } from '../modules/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
usersArr: Array<IUser> = [
  {
    userId: "U101",
    userName: "Rohan Mehta",
    userRole: "Angular Developer",
    profileDescription: "Develops responsive web applications using Angular.",
    profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
    skills: ["Angular", "TypeScript", "HTML", "CSS", "RxJS"],
    experience: "2 to 4 Years",
    isActive: true,
    isAddSame: true,
    address: {
      currentAddress: {
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        zipCode: "411001"
      },
      permanentAddress: {
        city: "Nashik",
        state: "Maharashtra",
        country: "India",
        zipCode: "422001"
      }
    }
  },
  {
    userId: "U102",
    userName: "Neha Kapoor",
    userRole: "UI Developer",
    profileDescription: "Specializes in HTML, CSS and Bootstrap.",
    profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    experience: "1 to 3 Years",
    isActive: false,
    isAddSame: false,
    address: {
      currentAddress: {
        city: "Delhi",
        state: "Delhi",
        country: "India",
        zipCode: "110001"
      },
      permanentAddress: {
        city: "Noida",
        state: "Uttar Pradesh",
        country: "India",
        zipCode: "201301"
      }
    }
  },
  {
    userId: "U103",
    userName: "Arjun Singh",
    userRole: "Backend Developer",
    profileDescription: "Experienced in Node.js, Express and MongoDB.",
    profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
    skills: ["Node.js", "Express.js", "MongoDB", "REST API"],
    experience: "4 to 6 Years",
    isActive: true,
    isAddSame: true,
    address: {
      currentAddress: {
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        zipCode: "560001"
      },
      permanentAddress: {
        city: "Hubli",
        state: "Karnataka",
        country: "India",
        zipCode: "580020"
      }
    }
  },
  {
    userId: "U104",
    userName: "Pooja Verma",
    userRole: "QA Engineer",
    profileDescription: "Manual and Automation Testing expert.",
    profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
    skills: ["Selenium", "Java", "JIRA", "Postman"],
    experience: "3 to 5 Years",
    isActive: true,
    isAddSame: false,
    address: {
      currentAddress: {
        city: "Hyderabad",
        state: "Telangana",
        country: "India",
        zipCode: "500081"
      },
      permanentAddress: {
        city: "Warangal",
        state: "Telangana",
        country: "India",
        zipCode: "506002"
      }
    }
  },
  {
    userId: "U105",
    userName: "Karan Patel",
    userRole: "Full Stack Developer",
    profileDescription: "Works on Angular, Node.js and MongoDB projects.",
    profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
    skills: ["Angular", "Node.js", "MongoDB", "TypeScript"],
    experience: "5 to 7 Years",
    isActive: false,
    isAddSame: true,
    address: {
      currentAddress: {
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        zipCode: "380001"
      },
      permanentAddress: {
        city: "Surat",
        state: "Gujarat",
        country: "India",
        zipCode: "395003"
      }
    }
  }
];
  constructor() { }

  fetchAllUser():Observable<Array<IUser>>{
    return of(this.usersArr)
  }

  fetchUserById(id:string):Observable<IUser>{
     let UserObj=this.usersArr.find(t=>t.userId===id)!;
     return of(UserObj);
  }

  OnaddUser(user:IUser):Observable<IresUser>{
    this.usersArr.push(user);
    return of({
      msg:`The user with id ${user.userId } is Added Succesfully`,
      data:user
    })
  }

  onRemove(id:string):Observable<IresUser>{
    let getindex=this.usersArr.findIndex(t=>t.userId===id);
    let removeItem=this.usersArr.splice(getindex,1);
    return of({
      msg:`The User with id ${id} is removed Succesfully`,
      data:removeItem[0]
    })
  }

  onUpdate(user:IUser):Observable<IresUser>{
    let getindex=this.usersArr.findIndex(t=>t.userId===user.userId);
    this.usersArr[getindex]=user;
    return of({
      msg:`The product with id ${user.userId} is updated Successfully`,
      data:user
    })
  }
}
