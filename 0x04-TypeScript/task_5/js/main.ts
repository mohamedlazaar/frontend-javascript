interface MajorCredits{
    credits: number
    brand: "Major"
}
interface MinorCredits{
    credits: number
    brand: "Minor"
}
function sumMajorCredits(subject1:MajorCredits, subject2:MajorCredits):MajorCredits{
    return(
       { credits: subject1.credits + subject2.credits,
        brand: "Major"
    }
    )
}
function sumMinorCredits(subject1:MinorCredits, subject2:MinorCredits):MinorCredits{
    return(
       { credits: subject1.credits + subject2.credits,
        brand: "Minor"
    }
    )
}

// Example usage
const major1: MajorCredits = { credits: 3, brand: 'Major' };
const major2: MajorCredits = { credits: 4, brand: 'Major' };
const totalMajor = sumMajorCredits(major1, major2);
console.log(`Total Major Credits: ${totalMajor.credits}`);

const minor1: MinorCredits = { credits: 2, brand: 'Minor' };
const minor2: MinorCredits = { credits: 3, brand: 'Minor' };
const totalMinor = sumMinorCredits(minor1, minor2);
console.log(`Total Minor Credits: ${totalMinor.credits}`);