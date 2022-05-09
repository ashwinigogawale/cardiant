import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { ColumnServiceService } from 'src/app/services/api/column-service.service';
import { CardServiceService } from 'src/app/services/api/card-service.service';
import { BoardServiceService } from 'src/app/services/api/board-service.service';
@Component({
  selector: 'app-sureboard',
  templateUrl: './sureboard.component.html',
  styleUrls: ['./sureboard.component.scss']
})
export class SureboardComponent implements OnInit {

  // getting values objects
  cols: any;
  cards: any;
  board: any;

  // setting values object
  onecol = {
    'cName': '',
    'board': ''
  };
  onecard = {
    'title': '',
    'date': '',
    'image': '',
    'presentColumn': '',
    'column': ''
  };

  cardData = {
    title: '',
    date: '',
    image: '',
    presentColumn: '',
    description: '',
    tags: '',
    storyPoints: '',
    valuePoints: '',
    issueType: '',
    assignedTo: '',
    scheduledDate: '',
    attachmentTaA: '',
    story_details: '',
    scenario_given_when: '',
    data_expected_result: '',
    functional_area_passfail_details: '',
    scalibility: '',
    test_case_demo_case: '',
    estimates: '',
    dor_approval_status: '',
    gitCommited: '',
    code_quality_review_done: '',
    peer_revired: '',
    builds_without_error: '',
    unit_test_details: '',
    promoted_test_instance: '',
    configuration_changes: '',
    unit_test_details2: '',
    closed_for_clocking: '',
    attachmentDoD: '',
    priority_index: '',
    related_issue: '',
    estimated_time: '',
    elapsed_time: '',
    start_date_time: '',
    completion_date_time: '',
    project: '',
    repository: '',
    sprint_test: '',
    current_status: '',
    clock_status: '',
    project_priority: '',
    pinned_status: '',
    column: {
      cId: '',
    }
  }

  onecardu: any;
  onecolu: any;

  // flag variables
  flag = false;
  flag2 = false;
  flag3 = false;

  isModalVisible = false;
  isModalVisibleCard = false;
  isModalVisibleCardUpdate = false;
  open = false;

  isColVisible = false;

  modalCreate = false;

  modalEdit = false;
  newCardEdit = false;
  rowSelected :any= {};

  finalcol: Array<any>;
  ocol: any;
  currtime: any;

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  filterDirectory: any[] = [
    {
        name: " Quick Filters",
        expanded: false,
        files: [
            {
                //icon: "calendar",
                name: "Calendar",
            },
            {
                name: "Charts",
               // active: false
            },
            {
                name: "Dashboard",
               // active: false
            },
            {
                name: "Maps",
                //active: false
            },
        ]
    },
  ];
  teamDirectory: any[] = [
    {
        name: "Teams",
        expanded: false,
        files: [
            {
                //icon: "calendar",
                name: "team1",
            },
            {
                name: "team2",
               // active: false
            },
            {
                name: "team3",
               // active: false
            },
            {
                name: "team3",
                //active: false
            },
        ]
    },
  ];
  repositoriesDirectory: any[] = [
    {
        name: "Repositories",
        expanded: true,
        files: [
            {
                //icon: "calendar",
                name: "Backend",
            },
            {
                name: "Frontend",
               // active: false
            },
            {
                name: "Mobile",
               // active: false
            },
        ]
    },
  ];

  constructor(private _col: ColumnServiceService,
    private _card: CardServiceService,
    private _board: BoardServiceService,
    private httpClient: HttpClient) {this.finalcol = new Array<any>(); }

  ngOnInit(): void {
    this._col.getColumnsOfBoard(107).subscribe(
      (data: any)=>{
        this.cols = data;

        this.cols.forEach((c: any)=>{
          c['cdata'] = '';
          this._card.getCardsOfColumn(c.cId).subscribe(
            (datacard: any)=>{
              c['cdata'] = datacard;
            },
            (err: any)=>{
              console.log('error: '+err);
            }
          );
        });
        console.log(this.cols);
      },
      (error: any)=>{
        console.log('Error in loading data : ' + error);

      }
    );

    this._board.getOneBoard(107).subscribe(
      (data: any)=>{
        this.board = data;
        console.log(this.board);
      },
      (error: any)=>{
        console.log('error occured while getting board.');
      }
    );
  }

  onEdit(row) {
    this.newCardEdit = true;

    this._card.getOneCard(row).subscribe(
      (data: any)=>{
        this.onecardu = data;
        console.log(this.onecardu);
      },
      (error: any)=>{
        console.log('error occured while getting card data for updation');
      }
    );
    this.modalEdit = true;
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addColumn(){
    this.onecol.board = this.board;

    this._col.createcolumn(this.onecol).subscribe(
      (data: any)=>{
        console.log('column added successfully..'+ data);
        // console.log(this.onecol);
        this.flag = false;
        this.isModalVisible = false;
        this.ngOnInit();
      },
      (error: any)=>{
        console.log('Something went wrong : ' + error);

      }
    );

  }

  addCard(cid: any){
    // this.flag2 = true;

    console.log(cid);

    this._col.getOneColumn(cid).subscribe(
      (data: any)=>{
        this.onecard.column = data;
        // console.log(this.ocol);

      },
      (error: any)=>{
        console.log('error in getting column..' + error);

      }
    );

    // this.isModalVisibleCard = true;
    this.modalCreate = true;

    this.onecard.date = this.getCurrentTime();
    this.onecard.image = 'defaultPhoto.png';

  }

  addCardDb(){
    console.log(this.onecard);

      this._card.createCard(this.onecard).subscribe(
      (data: any)=>{
        console.log('Card added successfully..'+ data);
        console.log(this.onecard);

        this.ngOnInit();
        // this.isModalVisibleCard = false;
        this.modalCreate = false;
      },
      (error: any)=>{
        console.log('Error in adding card..'+ error);
      }
    );
  }

  getBoard(){
    this._board.getOneBoard(107).subscribe(
      (data: any)=>{
        this.board = data;
      },
      (error: any)=>{
        console.log('Error occured: '+ error);

      }
    );
  }


  updateCard(){
    console.log(this.onecardu);

    this._card.updateCard(this.onecardu).subscribe(
      (data: any)=>{
        console.log('card updated successfully.');
        this.onecardu = data;
        console.log('Updated Card: ' + this.onecardu);
        this.modalEdit = false;
        this.ngOnInit();
      },
      (error: any)=>{
        console.log('card not updated..');

      }
    );

  }

  oncEdit(cid: any){
    this._col.getOneColumn(cid).subscribe(
      (data: any)=>{
        this.onecolu = data;

      },
      (err: any)=>{
        console.log('Error occured while fetching column data.');

      }
    );
    this.isColVisible = true;
  }

  updateCol(){
    console.log(this.onecolu);
    this._col.updatecolumn(this.onecolu).subscribe(
      (data: any)=>{
        console.log('Column has been updated successfully..');
        console.log('updated data: ' + data);
        this.isColVisible = false;
        this.ngOnInit();
      },
      (error: any)=>{
        console.log('Something went wrong while updating column details..');

      }
    );
  }

  settrue(){
    this.flag = true;
  }

  getCurrentTime(){
    let date: Date = new Date();
    this.currtime = date.toString();
    this.currtime = this.currtime.split(' ', 5);
    let d = this.currtime[1] + ' ' + this.currtime[2] + ' ' + this.currtime[3];
    let t = this.currtime[4];
    // let time = d + ' ' + t;
    let time = d;
    return time;
  }

  onFinish(){
    // this.cardData.image = 'defaultPhoto.png';
    this.cardData.date = this.getCurrentTime();
    this.cardData.priority_index = '5.3';
    this.cardData.related_issue = 'Test Issue for wireframe create users #1110';
    this.cardData.estimated_time = '8 Hrs';
    this.cardData.elapsed_time = '16 hrs 35 sec';
    this.cardData.start_date_time = '07/07/2020 12:35:00';
    this.cardData.completion_date_time = '07/07/2020 12:35:00';
    this.cardData.project = 'Test Project';
    this.cardData.repository = 'Test Repository';
    this.cardData.sprint_test = 'Sprint';
    this.cardData.current_status = 'Spring Backlog';
    this.cardData.clock_status = 'Not Started';
    this.cardData.project_priority = 'Yes';
    this.cardData.pinned_status = 'Yes';

    console.log('Finish button clicked...');
    this._card.createCard(this.cardData).subscribe(
      (data: any)=>{
        console.log('Issue card added successfylly..');
        this.open = false;
        this.ngOnInit();
      },
      (error: any)=>{
        console.log('Error occured while adding issue card..');

      }
    );

  }

  delCard(id){
    console.log('delete button clicked..' +id);
    this._card.deleteCard(id).subscribe(
      (data: any)=>{
        console.log('Card deleted successfully..');
        this.newCardEdit = false;
        this.ngOnInit();

      },
      (error: any)=>{
        console.log('Error occured while deleting card');

      }
    );
  }

  delColumn(cid){
    console.log('column delete button clicked: ' + cid);
    this._col.deleteColumn(cid).subscribe(
      (data: any)=>{
        console.log('column deleted successfully..');
        this.isColVisible = false;
        this.ngOnInit();

      },
      (error: any)=>{
        console.log('error in deleting column...');

      }
    );
  }

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:9191/cards/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }

  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:9191/cards/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}
