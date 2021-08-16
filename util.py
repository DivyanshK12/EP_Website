import csv
import sys

def csv_to_yml(csv_filename : str = "in.csv", yml_filename : str = "out.yml") -> None:
    with open(csv_filename, newline='') as csvfile :
        filereader = csv.reader(csvfile)
        colnames = next(filereader)
        index = 0
        with open(yml_filename, 'w') as outfile:
            for data in filereader:
                outfile.write(f"- id : {index}\n")
                for key, val in zip(colnames, data):
                    outfile.write(f"  {key} : {val}\n")
                index+=1
                outfile.write("\n")
    print(f"Completed writing to {yml_filename}")

def yml_to_csv(yml_filename : str = "in.yml", csv_filename : str = "out.csv") -> None :
    pass

def main() -> None:
    input_count = len(sys.argv)
    if input_count >= 3 :
        input_file = sys.argv[1]
        output_file = sys.argv[2]
        csv_to_yml(input_file, output_file)
    else:
        print("Please follow the format : python util.py inputfilename.csv outputfilename.yml")

if __name__ == "__main__":
    main()

# incase Python version is less than 3.6 (Before f-strings were introduced), copy the following to make it work:
# Line 11 : outfile.write("- id : {}\n".format(index))
# Line 13 : outfile.write(f"  {} : {}\n".format(key, value))
# Line 16 : print(f"Completed writing to {}".format(yml_filename))