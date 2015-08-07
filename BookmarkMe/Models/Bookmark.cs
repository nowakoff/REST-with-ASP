using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookmarkMe.Models
{

    public partial class Bookmark
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public string User { get; set; }
        public DateTime Date { get; set; }

       
    }



}