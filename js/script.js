/* Project Category Selection */

let designButton = $(".design");
let programmingButton = $(".programming");
let selectCategoryDiv = $(".select-category");

console.log(designButton);
console.log(programmingButton);
console.log(selectCategoryDiv);

programmingButton.click(()=>{
    $(".design-projects").css('display', 'none');
    $(".programming-projects").css('display','grid');
    programmingButton.css('font-weight','bold')
    designButton.css('font-weight','normal')



});
designButton.click(()=>{
    $(".design-projects").css('display', 'grid')
    $(".programming-projects").css('display','none')
    programmingButton.css('font-weight','normal')
    designButton.css('font-weight','bold')
});