import csv
import sys
from typing import List

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
    ymlfile = open(yml_filename, 'r')
    content = ymlfile.read()
    data = content.split("\n\n") # Have the individual sections here now
    with open(csv_filename, 'w', newline='') as csvfile:
        # create the csv writer
        writer = csv.writer(csvfile)
        # write a row to the csv file
        header = get_val(data[0])
        writer.writerow(header)
        for entry in data:
            writer.writerow(get_val(entry, False))

def get_val(entry : str, key : bool = True) -> List[str]:
    titles = []
    enteries = entry.split("\n")
    for e in enteries : 
        titles.append(e.split(":", 1)[0 if key else 1].strip())
    if key: # if we are getting the key
        titles[0] = titles[0].replace("- ", "")
    return titles

def main() -> None:
    input_count = len(sys.argv)
    if input_count >= 3 :
        input_file = sys.argv[1]
        output_file = sys.argv[2]
        mode = sys.argv[3]
        if mode == 1 :
            csv_to_yml(input_file, output_file)
        elif mode == 2 :
            yml_to_csv(input_file, output_file)
        else :
            print("Invalid mode. Enter 1 to convert csv to yml, 2 to convert yml to csv")
    else:
        print("Please follow the format : python util.py inputfilename outputfilename mode")

if __name__ == "__main__":
    main()

# incase Python version is less than 3.6 (Before f-strings were introduced), copy the following to make it work:
# Line 11 : outfile.write("- id : {}\n".format(index))
# Line 13 : outfile.write(f"  {} : {}\n".format(key, value))
# Line 16 : print(f"Completed writing to {}".format(yml_filename))
# The type definiton after : need to be removed too in that scenario