import csv
import sys

def csv_to_yml(csv_filename : str = "in", yml_filename : str = "out") -> None:
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