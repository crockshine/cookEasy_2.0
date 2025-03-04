﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Types
{
    public class Auth : BaseType
    {
        [Column("user_id")]
        public int UserId { get; set; }
        public User User { get; set; }

        [Column("token")]
        [Required]
        [StringLength(75)]
        public string Token { get; set; }
    }
}
