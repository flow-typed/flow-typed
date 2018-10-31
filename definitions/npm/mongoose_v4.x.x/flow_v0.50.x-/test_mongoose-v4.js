// @flow

import mongoose, { Schema } from "mongoose";

export const AdminSchema: Mongoose$Schema<AdminDoc> = new Schema(
  {
    _id: String,
    email: {
      type: String,
      set: (v: string) => v.toLowerCase().trim(),
      required: true
    },
    token: {
      type: String,
      required: true
    },
    name: String
  },
  {
    timestamps: true,
    collection: "admin"
  }
);

AdminSchema.index({ email: 1 }, { background: true });

AdminSchema.pre("save", function(next) {
  this._id = this.email;
  next();
});

export class AdminDoc /*:: extends Mongoose$Document */ {
  email: string;
  token: string;
  name: ?string;

  // internal properties
  _plainPassword: ?string;

  static test(ok: number): string {
    return ok.toString();
  }

  // NOT SUPPORTED in flow-typed tests
  // But will work with your code if you add in your .flowconfig
  //   [options]
  //   unsafe.enable_getters_and_setters=true
  //
  // get password(): ?string {
  //   return this._plainPassword;
  // }
  //
  // set password(password: string): void {
  //   this._plainPassword = password;
  //   this.token = this.encryptPassword(password);
  // }
  //
  // get fullname(): string {
  //   const fullname = [];
  //   if (this.lastname) fullname.push(this.lastname);
  //   if (this.name) fullname.push(this.name);
  //   if (this.middlename) fullname.push(this.middlename);
  //   return fullname.join(' ');
  // }

  encryptPassword(password: string): string {
    return "bcrypt.hashSync(password, 13)";
  }

  checkPassword(password: string): boolean {
    return !!"bcrypt.compareSync(password, this.token)";
  }
}

AdminSchema.loadClass(AdminDoc);

AdminSchema.post("save", (doc, next) => {
  doc.name = "Abc";
  // $ExpectError
  doc.name = 123;
  next();
});

export const Admin = mongoose.model("Admin", AdminSchema);

Admin.findById(1).then(d => {
  if (d) {
    // $ExpectError
    d.checkPassword(123);
  }
});

Admin.test(123);
// $ExpectError
Admin.test("123");

const a = Admin.findOne({})
  .exec()
  .then(ddd => {
    if (ddd) {
      ddd.checkPassword("123");
      // $ExpectError
      ddd.checkPassword(123);
    }
  });

const a1 = new Admin({ email: "123", token: "www" });
// $ExpectError
const a2 = new Admin({ email: 123, token: "www" });


Admin.aggregate([ { $project : { email : 1 } } ]).allowDiskUse(true).exec()

//
export const UserSchema: Mongoose$Schema<Mongoose$Document> = new Schema(
  {
    email: {
      type: String,
      match: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      set: (v: string) => v.toLowerCase().trim(),
      required: true
    },
    name: String,
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    },
    collection: "user"
  }
);

const User = mongoose.model("User", UserSchema);

User.findOne({}).exec().then( user => {
  if (user) {
    user.populate("admin").execPopulate();
  }
})

mongoose.disconnect(err => console.log("err"));

mongoose.disconnect().then(data => console.log(data));
