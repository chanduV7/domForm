var form2 = document.getElementById("form2");
var bdy = document.getElementById("bdy");
// bdy.style.background="repeating-linear-gradient(green,white,cyan)";
// bdy.style.backgroundRepeat="no-repeat";
bdy.style.width="99vw";
bdy.style.height="100vh";
// bdy.style.backgroundSize="cover";

var div_main = document.createElement("div");
form2.appendChild(div_main);

div_main.style.display="flex";
div_main.style.flexDirection="column";
div_main.style.rowGap="1rem";
div_main.style.fontSize="1.2rem";

var div1 = document.createElement("div");
div_main.appendChild(div1);
div1.style.display="flex";
div1.style.columnGap="7rem";
var div11 = document.createElement("div");
div1.appendChild(div11);
var std_name = document.createElement("label");
div11.appendChild(std_name);
std_name.innerHTML="1. Name of the Student";
var div12 = document.createElement("div");
div1.appendChild(div12);
var stu_res = document.createElement("input");
div12.appendChild(stu_res);

var div2 = document.createElement("div");
div_main.appendChild(div2);

var div21 = document.createElement("div");
div2.appendChild(div21);
var div22 = document.createElement("div");
div2.appendChild(div22);
var div23 = document.createElement("div");
div2.appendChild(div23);
var div24 = document.createElement("div");
div2.appendChild(div24);

var std_name1 = document.createElement("label");
div21.appendChild(std_name1);
std_name1.innerHTML="2. Graduation Status";
var stu_res1 = document.createElement("input");
div22.appendChild(stu_res1);

var std_name2 = document.createElement("label");
div23.appendChild(std_name2);
std_name2.innerHTML="3. Medium";
var stu_res3 = document.createElement("input");

div24.appendChild(stu_res3);

div2.style.display="flex";
div2.style.columnGap="8rem";

var div3 = document.createElement("div");
div_main.appendChild(div3);

div3.style.display="flex";
div3.style.columnGap="2rem";

var div31 = document.createElement("div");
div3.appendChild(div31);
var div32 = document.createElement("div");
div3.appendChild(div32);
var div33 = document.createElement("div");
div3.appendChild(div33);
var div34 = document.createElement("div");
div3.appendChild(div34);
var div35 = document.createElement("div");
div3.appendChild(div35);
var div36 = document.createElement("div");
div3.appendChild(div36);
var div37 = document.createElement("div");
div3.appendChild(div37);

var gender = document.createElement("label");
div31.appendChild(gender);
gender.innerHTML="4.Gender: ";

var male= document.createElement("label");
div32.appendChild(male);
male.innerHTML="Male";

var gender_res = document.createElement("input");
gender_res.name="g";
div33.appendChild(gender_res);

var gender_type = document.createAttribute("type");
gender_type.value="radio";
gender_res.setAttributeNode(gender_type);

var female= document.createElement("label");
div34.appendChild(female);
female.innerHTML="Female";

var female_res= document.createElement("input");
female_res.type="radio";
female_res.name="g";
div35.appendChild(female_res);

// var female_type = document.createAttribute("type");
// female_type.value="radio";
// female_res.setAttributeNode(female_type);

var dob1 = document.createElement("label");
div36.appendChild(dob1);
dob1.innerHTML="5. Date of Birth";

var dob1_res = document.createElement("input");
dob1_res.type="date";
div37.appendChild(dob1_res);

var div4 = document.createElement("div");;
div_main.appendChild(div4);

div4.style.display="flex";
div4.style.columnGap="3rem";

var div41 = document.createElement("div");
div4.appendChild(div41);
var div42 = document.createElement("div");
div4.appendChild(div42);
var div43 = document.createElement("div");
div4.appendChild(div43);
var div44 = document.createElement("div");
div4.appendChild(div44);

var nation = document.createElement("label");
nation.innerHTML="6. Nationality";
div41.appendChild(nation);

var nat_res = document.createElement("input");
div42.appendChild(nat_res);

var email = document.createElement("label");
div43.appendChild(email);
email.innerHTML="7. Email Address";

var email_res = document.createElement("input");
div44.appendChild(email_res);

var div5 = document.createElement("div");
div_main.appendChild(div5);
div5.style.display="flex";
div5.style.columnGap="5rem";

var div51 = document.createElement("div");
div5.appendChild(div51);
var div52 = document.createElement("div");
div5.appendChild(div52);

var aadhar1 = document.createElement("label");
div51.appendChild(aadhar1);
aadhar1.innerHTML="8. Aadhar";

var aadhar_res = document.createElement("input");
div52.appendChild(aadhar_res);
aadhar_res.style.width="20rem";


var div6 = document.createElement("div");
div_main.appendChild(div6);
div6.style.display="flex";
div6.style.columnGap="5rem";

var div61 = document.createElement("div");
div6.appendChild(div61);
var div62 = document.createElement("div");
div6.appendChild(div62);

var aadhar1 = document.createElement("label");
div61.appendChild(aadhar1);
aadhar1.innerHTML="9. Mobile Number";

var aadhar_res = document.createElement("input");
div62.appendChild(aadhar_res);
aadhar_res.style.width="12rem";

var div7 = document.createElement("div");
div_main.appendChild(div7);

var aadhar12 = document.createElement("label");
div7.appendChild(aadhar12);
aadhar12.innerHTML="10. Permanent Address";

var div8 = document.createElement("div");
div_main.appendChild(div8);

var txtadd =  document.createElement("textarea");
txtadd.rows=3;
txtadd.cols=200;
div8.appendChild(txtadd);

var div9 = document.createElement("div");
div_main.appendChild(div9);

div9.style.display="flex";
div9.style.columnGap="3rem";

var div91 = document.createElement("div");
div9.appendChild(div91);
var div92 = document.createElement("div");
div9.appendChild(div92);
var div93 = document.createElement("div");
div9.appendChild(div93);
var div94 = document.createElement("div");
div9.appendChild(div94);

var nation1 = document.createElement("label");
nation1.innerHTML="Pin Code";
div91.appendChild(nation1);

var nat_res1 = document.createElement("input");
div92.appendChild(nat_res1);

var email1 = document.createElement("label");
div93.appendChild(email1);
email1.innerHTML="Mobile Number";

var email_res1 = document.createElement("input");
div94.appendChild(email_res1);
// --------------------------------------------
var div10 = document.createElement("div");
div_main.appendChild(div10);

var aadhar12 = document.createElement("label");
div10.appendChild(aadhar12);
aadhar12.innerHTML="11. Correspondance Address";

var div111 = document.createElement("div");
div_main.appendChild(div111);

var txtadd =  document.createElement("textarea");
txtadd.rows=3;
txtadd.cols=200;
div111.appendChild(txtadd);


var div9 = document.createElement("div");
div_main.appendChild(div9);

div9.style.display="flex";
div9.style.columnGap="3rem";

var div91 = document.createElement("div");
div9.appendChild(div91);
var div92 = document.createElement("div");
div9.appendChild(div92);
var div93 = document.createElement("div");
div9.appendChild(div93);
var div94 = document.createElement("div");
div9.appendChild(div94);

var nation1 = document.createElement("label");
nation1.innerHTML="Pin Code";
div91.appendChild(nation1);

var nat_res1 = document.createElement("input");
div92.appendChild(nat_res1);

var email1 = document.createElement("label");
div93.appendChild(email1);
email1.innerHTML="Mobile Number";

var email_res1 = document.createElement("input");
div94.appendChild(email_res1);

var div1 = document.createElement("div");
div_main.appendChild(div1);
div1.style.display="flex";
div1.style.columnGap="7rem";
var div11 = document.createElement("div");
div1.appendChild(div11);
var std_name = document.createElement("label");
div11.appendChild(std_name);
std_name.innerHTML="12. Father's Name";
var div12 = document.createElement("div");
div1.appendChild(div12);
var stu_res = document.createElement("input");
div12.appendChild(stu_res);


var div4 = document.createElement("div");;
div_main.appendChild(div4);

div4.style.display="flex";
div4.style.columnGap="3rem";

var div41 = document.createElement("div");
div4.appendChild(div41);
var div42 = document.createElement("div");
div4.appendChild(div42);
var div43 = document.createElement("div");
div4.appendChild(div43);
var div44 = document.createElement("div");
div4.appendChild(div44);

var nation = document.createElement("label");
nation.innerHTML="13. Educational Qualification";
div41.appendChild(nation);

var nat_res = document.createElement("input");
div42.appendChild(nat_res);

var email = document.createElement("label");
div43.appendChild(email);
email.innerHTML="14. Occupation";

var email_res = document.createElement("input");
div44.appendChild(email_res);

var div1 = document.createElement("div");
div_main.appendChild(div1);
div1.style.display="flex";
div1.style.columnGap="7rem";
var div11 = document.createElement("div");
div1.appendChild(div11);
var std_name = document.createElement("label");
div11.appendChild(std_name);
std_name.innerHTML="14. Mother's Name";
var div12 = document.createElement("div");
div1.appendChild(div12);
var stu_res = document.createElement("input");
div12.appendChild(stu_res);


var div4 = document.createElement("div");;
div_main.appendChild(div4);

div4.style.display="flex";
div4.style.columnGap="3rem";

var div41 = document.createElement("div");
div4.appendChild(div41);
var div42 = document.createElement("div");
div4.appendChild(div42);
var div43 = document.createElement("div");
div4.appendChild(div43);
var div44 = document.createElement("div");
div4.appendChild(div44);

var nation = document.createElement("label");
nation.innerHTML="15.Educational Qualification";
div41.appendChild(nation);

var nat_res = document.createElement("input");
div42.appendChild(nat_res);

var email = document.createElement("label");
div43.appendChild(email);
email.innerHTML="16. Occupation";

var email_res = document.createElement("input");
div44.appendChild(email_res);

var div3 = document.createElement("div");
div_main.appendChild(div3);

div3.style.display="flex";
div3.style.columnGap="2rem";

var div31 = document.createElement("div");
div3.appendChild(div31);
var div32 = document.createElement("div");
div3.appendChild(div32);
var div33 = document.createElement("div");
div3.appendChild(div33);
var div34 = document.createElement("div");
div3.appendChild(div34);
var div35 = document.createElement("div");
div3.appendChild(div35);
var div36 = document.createElement("div");
div3.appendChild(div36);
var div37 = document.createElement("div");
div3.appendChild(div37);

var gender = document.createElement("label");
div31.appendChild(gender);
gender.innerHTML="17. Residing in Hostel";

var male= document.createElement("label");
div32.appendChild(male);
male.innerHTML="Yes";

var gender_res = document.createElement("input");
div33.appendChild(gender_res);

var gender_type = document.createAttribute("type");
gender_type.value="checkbox";
gender_res.setAttributeNode(gender_type);

var female= document.createElement("label");
div34.appendChild(female);
female.innerHTML="No";

var female_res= document.createElement("input");
female_res.type="checkbox";
div35.appendChild(female_res);

var dob1 = document.createElement("label");
div36.appendChild(dob1);
dob1.innerHTML="Name of the Hostel";

var dob1_res = document.createElement("input");

div37.appendChild(dob1_res);

var div_table = document.createElement("div");
div_main.appendChild(div_table);

var table1 = document.createElement("table");
div_table.appendChild()





