/**
 * Created by liuwenjing on 2017/6/13.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'content',
    templateUrl: './course.html',
    styleUrls: ['./course.scss']
})
export class ContentComponent {
    public course;
    public abouts;

    public tab = [true, false, false, false];

    constructor(
    ) {
        this.testSrc();
        this.getCourse();

    }

    public testSrc() {
        this.course = {
            cover: 'assets/img/course.jpg',
            favnum: 520,
            title: '深度讲解Linux企业级集群实现方案【马哥linux视频课程】',
        }

        this.abouts = [
            {
                img: 'assets/img/about1.jpg',
                title: '拯救未来：名师三人行联手打造最强系统/网络视频课程专题',
                time: '7.1-7.7',
                activity: '折上8折',
                count: 5641,
            },
            {
                img: 'assets/img/about1.jpg',
                title: '拯救未来：名师三人行联手打造最强系统/网络视频课程专题',
                time: '7.1-7.7',
                activity: '折上8折',
                count: 5641,
            },
            {
                img: 'assets/img/about1.jpg',
                title: '拯救未来：名师三人行联手打造最强系统/网络视频课程专题',
                time: '7.1-7.7',
                activity: '折上8折',
                count: 5641,
            },
        ]

    }

    public getCourse() {

    }

    public showtab(num){
        this.tab = [false, false, false, false];
        this.tab[num] = true;
    }

}
