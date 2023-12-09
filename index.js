function f(x){

    return Math.sqrt(4-(4*x*x))

}

 

function integral(dx,a,b,f){

    //integral from a to b of f(x) with a sample spacing of dx

    sum_result = 0

    current_pointer = a

    //evaluate f(x) at current_pointer, multiply by dx, add it into sum_result, increment current_pointer by dx

    while (current_pointer+dx <= b) {

        sum_result+=(f(current_pointer)*dx)

        current_pointer+=dx

    }

    return sum_result

}

 

//2*integral(dx,-1,1,sqrt(1-x^2)) = intgral(dx,-1,1,functionofx) where functionofx = sqrt(4-(4x^2))

 

function calculate_pi_and_update(){

    dx = Number(document.getElementById("dx_range").value)

    //find approx area of circle => pi = area/(r*r) = area/1 and area = the below integral

    pi_result = integral(dx,-1,1,f).toFixed(30)

    document.getElementById("pi_paragraph").innerHTML = pi_result

}

 

calculate_pi_and_update()