using BookmarkMe.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace BookmarkMe.Controllers
{
    [RoutePrefix("api/Bookmark")]
    public class BookmarkController : ApiController
    {
        public IHttpActionResult GetDemo()
        {
            JObject j = new JObject();
            j.Add("user", "John");
            j.Add("url", "http://www.cnn.com");
            j.Add("title", "CNN");

            return Ok(j);
        }
        // GET api/values
        public IEnumerable<Bookmark> Get()
        {
            DataSet data = new DataSet();
            Bookmark bookmark = new Bookmark();
            List<Bookmark> bookmarkList = new List<Bookmark>();
            data = Data.BookmarkAccess.SelectBookmarks();
            foreach (DataRow x in data.Tables[0].Rows)
            {
                bookmark = new Bookmark();
                bookmark.ID = Int32.Parse(x[0].ToString());
                bookmark.Title = x[1].ToString();
                bookmark.Url = x[2].ToString();
                bookmark.User = x[3].ToString();
                bookmark.Date = DateTime.Parse(x[4].ToString());
                bookmarkList.Add(bookmark);

            }
            return bookmarkList;

        }

        // GET api/values/5
        [Route("{id:int}")]
        [ResponseType(typeof(Bookmark))]
        public IHttpActionResult Get(int id)
        {

            DataSet data = new DataSet();
            Bookmark bookmark = new Bookmark();
            data = Data.BookmarkAccess.SelectOneBookmark(id);
            bookmark.ID = Int32.Parse(data.Tables[0].Rows[0][0].ToString());
            bookmark.Title = data.Tables[0].Rows[0][1].ToString();
            bookmark.Url = data.Tables[0].Rows[0][2].ToString();
            bookmark.User = data.Tables[0].Rows[0][3].ToString();
            bookmark.Date = DateTime.Parse(data.Tables[0].Rows[0][4].ToString());


            return Ok(bookmark);
        }
    }
}

